import AgoraRTC from "agora-rtc-sdk-ng";
import AgoraRTM from "agora-rtm-sdk";
import { getUserId } from "./api/auth";

let rtc = {
  localAudioTrack: null,
  client: null,
};

let options = {
  appId: "b8155eae6d794195984f9efa69e1eb19",
  channel: null,
  token: null,
  uid: null,
};

const setOptions = async () => {
  options.uid = await getUserId();
  options.channel = window.location.pathname.split("/")[2];
};

let rtmClient = null;
let channel = null;

const startCall = async () => {
  try {
    await setOptions();

    rtmClient = await AgoraRTM.createInstance(options.appId);
    await rtmClient.login({ uid: options.uid, token: options.token });

    channel = rtmClient.createChannel(options.channel);
    await channel.join();

    rtc.client = AgoraRTC.createClient({ mode: "rtc", codec: "vp8" });

    rtc.client.on("user-published", async (user, mediaType) => {
      await rtc.client.subscribe(user, mediaType);
      if (mediaType === "audio") {
        const remoteAudioTrack = user.audioTrack;
        remoteAudioTrack.play();
      }

      rtc.client.on("user-unpublished", async (user) => {
        await rtc.client.unsubscribe(user);
      });
    });

    await rtc.client.join(
      options.appId,
      options.channel,
      options.token,
      options.uid
    );

    rtc.localAudioTrack = await AgoraRTC.createMicrophoneAudioTrack();
    await rtc.client.publish([rtc.localAudioTrack]);
    toggleMicrophoneTrack("off");
  } catch (error) {
    console.log(error);
  }
};

const leaveCall = async () => {
  try {
    await channel.leave();
    await rtmClient.logout();
    rtc.localAudioTrack.close();
    await rtc.client.leave();
  } catch (error) {
    console.log(error);
  }
};

const toggleMicrophoneTrack = async (mic) => {
  try {
    switch (mic) {
      case "on":
        rtc.localAudioTrack.setMuted(false);
        break;
      case "off":
        rtc.localAudioTrack.setMuted(true);
        break;
      default:
        break;
    }
  } catch (error) {
    console.log(error);
  }
};

const getUsers = async () => {
  try {
    if (!channel) return [];
    const users = await channel.getMembers();
    return users;
  } catch (error) {
    console.log(error);
    return [];
  }
};

export { startCall, leaveCall, toggleMicrophoneTrack, channel, getUsers };

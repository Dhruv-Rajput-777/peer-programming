import React from "react";
import Split from "react-split";

import { useSelector } from "react-redux";

import Header from "../components/room/Header";
import QuestionContainer from "../components/room/QuestionContainer";
import TextEditor from "../components/room/TextEditor";
import WhiteBoard from "../components/room/WhiteBoard";

import AgoraRTC from "agora-rtc-sdk-ng";

let rtc = {
  localAudioTrack: null,
  client: null,
};

let options = {
  appId: "b8155eae6d794195984f9efa69e1eb19",
  channel: "test",
  token: null,
  uid: parseInt(Math.random() * 10000),
};

async function startBasicCall() {
  // Create an AgoraRTCClient object.
  rtc.client = AgoraRTC.createClient({ mode: "rtc", codec: "vp8" });

  // Listen for the "user-published" event, from which you can get an AgoraRTCRemoteUser object.
  rtc.client.on("user-published", async (user, mediaType) => {
    // Subscribe to the remote user when the SDK triggers the "user-published" event
    await rtc.client.subscribe(user, mediaType);
    console.log("subscribe success");

    // If the remote user publishes an audio track.
    if (mediaType === "audio") {
      // Get the RemoteAudioTrack object in the AgoraRTCRemoteUser object.
      const remoteAudioTrack = user.audioTrack;
      // Play the remote audio track.
      remoteAudioTrack.play();
    }

    // Listen for the "user-unpublished" event
    rtc.client.on("user-unpublished", async (user) => {
      // Unsubscribe from the tracks of the remote user.
      await rtc.client.unsubscribe(user);
    });
  });

  window.onload = async function () {
    // Join an RTC channel.
    await rtc.client.join(
      options.appId,
      options.channel,
      options.token,
      options.uid
    );
    // Create a local audio track from the audio sampled by a microphone.
    rtc.localAudioTrack = await AgoraRTC.createMicrophoneAudioTrack();
    // Publish the local audio tracks to the RTC channel.
    await rtc.client.publish([rtc.localAudioTrack]);

    console.log("publish success!");
  };
}

startBasicCall();

const Room = () => {
  const boardType = useSelector((state) => state.setBoardTypeReducer);

  return (
    <div>
      <Header />

      <Split
        className="flex"
        sizes={[56, 44]}
        minSize={100}
        expandToMin={false}
        gutterSize={10}
        gutterAlign="center"
        snapOffset={30}
        dragInterval={1}
        direction="horizontal"
        cursor="col-resize"
      >
        <QuestionContainer />
        {boardType == "editor" ? <TextEditor /> : <WhiteBoard />}
      </Split>
    </div>
  );
};

export default Room;

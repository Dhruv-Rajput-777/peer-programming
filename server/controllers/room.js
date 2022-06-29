import Room from "../models/room.js";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";

const sdkToken =
  "NETLESSSDK_YWs9cnV0U2ZaZWpfeFk3bXloViZub25jZT01ZTNjZjU4MC1mMjBlLTExZWMtYTM2NC1kMTU0ZjI4OTAzZTUmcm9sZT0wJnNpZz00NDgyMmY2NmZkZDhkODcyNjAyZjY0NzIyM2QxYmQ5NzEzMmMwZGZhNjVhNzJkY2I2ZWFmMmFlMmM5ODUyMWY0";

const jdoodle = {
  clientId: "47fde71b4b0b20a778bb2248037dc43f",
  clientSecret:
    "a4fd347ea7165f6712445bf885888de7a9621913318b2f21963f43a64851212b",
};

const createRoom = async (req, res) => {
  try {
    const newRoom = new Room({
      roomId: uuidv4(),
      roomUUID: null,
      roomToken: null,
    });
    newRoom.roomUUID = await requestUUID();
    newRoom.roomToken = await requestToken(newRoom.roomUUID);
    await newRoom.save();
    return res.send(newRoom);
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};

const requestUUID = async () => {
  try {
    const response = await axios.post(
      "https://api.netless.link/v5/rooms",
      JSON.stringify({ isRecord: false }),
      {
        headers: {
          token: sdkToken,
          "Content-Type": "application/json",
          region: "in-mum",
        },
      }
    );
    return response.data.uuid;
  } catch (error) {
    console.log(error);
    return null;
  }
};

const requestToken = async (roomUUID) => {
  try {
    const response = await axios.post(
      `https://api.netless.link/v5/tokens/rooms/${roomUUID}`,
      JSON.stringify({ lifespan: 100 * 60 * 60 * 6, role: "admin" }),
      {
        headers: {
          token: sdkToken,
          "Content-Type": "application/json",
          region: "in-mum",
        },
      }
    );
    return response.data;
  } catch (error) {
    console.log(error);
    return null;
  }
};

const getRoomDetails = async (req, res) => {
  try {
    const roomId = req.params.roomId;

    let room = await Room.findOne({ roomId: roomId });
    if (room == null) throw Error("Invalid Room Id");

    res.send({
      roomId: room.roomId,
      roomUUID: room.roomUUID,
      roomToken: room.roomToken,
      code: room.code,
      input: room.stdin,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};

const submitCode = async (roomId) => {
  try {
    const room = await Room.findOne({ roomId });
    if (room == null) throw Error("Invalid Room Id");

    const url = "https://api.jdoodle.com/v1/execute";
    const body = {
      script: room.code,
      language: "cpp17",
      versionIndex: "0",
      clientId: jdoodle.clientId,
      clientSecret: jdoodle.clientSecret,
      stdin: room.stdin,
    };

    const response = await axios.post(url, body);
    const data = response.data;
    return data;
  } catch (error) {
    console.log(error);
    return { output: "Server Error", memory: "0", cpuTime: "0" };
  }
};

export { createRoom, getRoomDetails, submitCode };

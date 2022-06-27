import Room from "../models/room.js";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";

const sdkToken =
  "NETLESSSDK_YWs9cnV0U2ZaZWpfeFk3bXloViZub25jZT01ZTNjZjU4MC1mMjBlLTExZWMtYTM2NC1kMTU0ZjI4OTAzZTUmcm9sZT0wJnNpZz00NDgyMmY2NmZkZDhkODcyNjAyZjY0NzIyM2QxYmQ5NzEzMmMwZGZhNjVhNzJkY2I2ZWFmMmFlMmM5ODUyMWY0";

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
    });
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};

export { createRoom, getRoomDetails };

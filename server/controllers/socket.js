import Room from "../models/room.js";
import { submitCode } from "./room.js";

export default (io) => {
  try {
    io.on("connection", (socket) => {
      socket.on("joinRoom", (roomId) => {
        socket.join(roomId);
      });

      socket.on("updateCode", async ({ roomId, code }) => {
        await Room.updateOne({ roomId }, { code });
        socket.to(roomId).emit("getUpdatedCode", code);
      });

      socket.on("updateInput", async ({ roomId, stdin }) => {
        await Room.updateOne({ roomId }, { stdin });
        socket.to(roomId).emit("getUpdatedInput", stdin);
      });

      socket.on("submitCode", async (roomId) => {
        const output = await submitCode(roomId);
        socket.nsp.in(roomId).emit("codeOutput", output);
      });
    });
  } catch (error) {
    console.log(error);
  }
};

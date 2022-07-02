import Room from "../models/room.js";
import Chats from "../models/chat.js";
import { submitCode } from "./room.js";

export default (io) => {
  try {
    io.on("connection", (socket) => {
      // room
      socket.on("joinRoom", (roomId) => {
        socket.join(roomId);
      });

      socket.on("updateCode", async ({ roomId, code }) => {
        try {
          await Room.updateOne({ roomId }, { code });
          socket.to(roomId).emit("getUpdatedCode", code);
        } catch (error) {
          console.log(error);
        }
      });

      socket.on("updateInput", async ({ roomId, stdin }) => {
        try {
          await Room.updateOne({ roomId }, { stdin });
          socket.broadcast.to(roomId).emit("getUpdatedInput", stdin);
        } catch (error) {
          console.log(error);
        }
      });

      socket.on("submitCode", async (roomId) => {
        try {
          const output = await submitCode(roomId);
          socket.nsp.in(roomId).emit("codeOutput", output);
        } catch (error) {
          console.log(error);
        }
      });

      // global chat
      socket.on("joinGlobalChat", () => {
        try {
          socket.join("globalChat");
        } catch (error) {
          console.log(error);
        }
      });

      socket.on("sendMessage", async ({ userId, message }) => {
        try {
          socket.to("globalChat").emit("recieveMessage", { userId, message });
          const chat = new Chats({ userId, message });
          await chat.save();
        } catch (error) {
          console.log(error);
        }
      });
    });
  } catch (error) {
    console.log(error);
  }
};

import mongoose from "mongoose";

const roomSchema = new mongoose.Schema({
  roomId: {
    type: String,
    required: true,
    unique: true,
  },
  roomUUID: {
    type: String,
    required: true,
  },
  roomToken: {
    type: String,
    required: true,
  },
  code: {
    type: String,
    default: "",
  },
  stdin: {
    type: String,
    default: "",
  },
});

const Room = mongoose.model("Room", roomSchema);
export default Room;

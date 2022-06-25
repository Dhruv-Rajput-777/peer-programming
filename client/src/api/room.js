import axios from "./axios";
import { getUserId } from "./auth";

const createRoom = async () => {
  try {
    const response = await axios.get("/room/createRoom");
    let data = response.data;
    const userId = await getUserId();

    if (userId == null) throw Error("User not found");

    localStorage.setItem("userId", userId);
    localStorage.setItem("roomId", data.roomId);
    localStorage.setItem("roomUUID", data.roomUUID);
    localStorage.setItem("roomToken", data.roomToken);

    data.success = true;
    return data;
  } catch (error) {
    console.log(error);
    return { success: false, error: "Error creating room" };
  }
};

export { createRoom };

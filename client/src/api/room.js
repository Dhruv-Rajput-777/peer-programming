import axios from "./axios";
import { getUserId } from "./auth";

const createRoom = async () => {
  try {
    const response = await axios.get("/room/createRoom");
    let data = response.data;

    const userId = await getUserId();
    if (userId == null) throw Error("User not found");

    data.success = true;
    return data;
  } catch (error) {
    console.log(error);
    return { success: false, error: "Error creating room" };
  }
};

const getRoomDetails = async () => {
  try {
    const roomId = window.location.pathname.split("/")[2];
    if (roomId == null) throw Error("Invalid Room Id");

    const response = await axios.get(`/room/getRoomDetails/${roomId}`);
    let data = response.data;

    const userId = await getUserId();
    if (userId == null)
      throw Error("User not found! Please Login to continue.");
    data.userId = userId;

    data.available = true;
    return data;
  } catch (error) {
    console.log(error);
    return { available: false, error: error.message };
  }
};

const submitCode = async (roomId) => {
  try {
    const response = await axios.get(`/room/submitCode/${roomId}`);
    let data = response.data;
    return data;
  } catch (error) {
    console.log(error);
    return { output: "Error submitting code! Please try again later." };
  }
};

export { createRoom, getRoomDetails, submitCode };

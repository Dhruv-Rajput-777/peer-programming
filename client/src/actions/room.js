import { getRoomDetails } from "../api/room";

export const setRoomDetails = () => async (dispatch) => {
  const roomDetails = await getRoomDetails();
  dispatch({
    type: "SET_ROOM_DETAILS",
    payload: roomDetails,
  });
};

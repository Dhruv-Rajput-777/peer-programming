import { getRoomDetails } from "../api/room";

const defaultTemplate =
  "#include <bits/stdc++.h>\nusing namespace std;\n\nint main() {\n\n  return 0;\n}";

export const setRoomDetails = () => async (dispatch) => {
  const roomDetails = await getRoomDetails();
  if (roomDetails.code == "") roomDetails.code = defaultTemplate;
  dispatch({
    type: "SET_ROOM_DETAILS",
    payload: roomDetails,
  });
};

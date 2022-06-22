export const showRoomModal = (roomId) => {
  return {
    type: "SHOW_ROOM_MODAL",
    payload: roomId,
  };
};

export const hideRoomModal = () => {
  return {
    type: "HIDE_ROOM_MODAL",
  };
};

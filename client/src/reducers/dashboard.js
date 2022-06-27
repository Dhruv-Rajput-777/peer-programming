const roomModalReducer = (
  state = {
    show: false,
    roomId: null,
  },
  action
) => {
  switch (action.type) {
    case "SHOW_ROOM_MODAL":
      return {
        show: true,
        roomId: action.payload,
      };
    case "HIDE_ROOM_MODAL":
      return {
        show: false,
        roomId: null,
      };
    default:
      return state;
  }
};

export { roomModalReducer };

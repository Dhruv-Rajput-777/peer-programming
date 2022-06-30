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

const dashboardDetailsReducer = (
  state = {
    userId: null,
  },
  action
) => {
  switch (action.type) {
    case "SET_DASHBOARD_DETAILS":
      return action.payload;
    default:
      return state;
  }
};

const chatReducer = (state = [], action) => {
  switch (action.type) {
    case "SET_MESSAGES":
      return action.payload;
    case "ADD_MESSAGE":
      return [...state, action.payload];
    default:
      return state;
  }
};

export { roomModalReducer, dashboardDetailsReducer, chatReducer };

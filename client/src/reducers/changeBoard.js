const setBoardTypeReducer = (state = "editor", action) => {
  switch (action.type) {
    case "SET_BOARD_TYPE":
      return action.payload;
    default:
      return state;
  }
};

export { setBoardTypeReducer };

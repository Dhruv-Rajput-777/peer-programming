const activeFileReducer = (state = "editor", action) => {
  switch (action.type) {
    case "SET_ACTIVE_FILE":
      return action.payload;
    default:
      return state;
  }
};

export { activeFileReducer };

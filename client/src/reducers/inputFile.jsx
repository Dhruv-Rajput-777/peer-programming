const inputFileReducer = (state = "", action) => {
  switch (action.type) {
    case "SET_INPUT_FILE":
      return action.payload;
    default:
      return state;
  }
};

export { inputFileReducer };
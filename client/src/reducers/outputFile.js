const outputFileReducer = (state = "", action) => {
  switch (action.type) {
    case "SET_OUTPUT_FILE":
      return action.payload;
    default:
      return state;
  }
};

export { outputFileReducer };

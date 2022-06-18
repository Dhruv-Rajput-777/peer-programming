const toggleMicReducer = (state = "mute", action) => {
  switch (action.type) {
    case "TOGGLE_MIC":
      return state === "mute" ? "unmute" : "mute";
    default:
      return state;
  }
};

export { toggleMicReducer };
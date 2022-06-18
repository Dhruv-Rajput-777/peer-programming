const showParticipantsReducer = (state = false, action) => {
  switch (action.type) {
    case "SHOW_PARTICIPANTS":
      return state ? false : true;
    default:
      return state;
  }
};

export { showParticipantsReducer };
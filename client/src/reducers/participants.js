const showParticipantsReducer = (state = false, action) => {
  switch (action.type) {
    case "SHOW_PARTICIPANTS":
      return state ? false : true;
    default:
      return state;
  }
};

const updateParticipantsReducer = (state = [], action) => {
  switch (action.type) {
    case "SET_PARTICIPANTS":
      return action.payload;
    case "ADD_PARTICIPANT":
      return state.includes(action.payload)
        ? state
        : [...state, action.payload];
    case "REMOVE_PARTICIPANT":
      return state.filter((name) => name !== action.payload);
    default:
      return state;
  }
};

export { showParticipantsReducer, updateParticipantsReducer };

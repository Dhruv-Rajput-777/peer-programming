const setQuestionReducer = (state = "", action) => {
  switch (action.type) {
    case "SET_QUESTION":
      return action.payload;
    default:
      return state;
  }
};

const setQuestionSourceReducer = (state = "", action) => {
  switch (action.type) {
    case "SET_QUESTION_SOURCE":
      return action.payload;
    default:
      return state;
  }
};

export { setQuestionReducer, setQuestionSourceReducer };

export const setQuestion = (question) => {
  return {
    type: "SET_QUESTION",
    payload: question,
  };
};

export const setQuestionSource = (questionSource) => {
  return {
    type: "SET_QUESTION_SOURCE",
    payload: questionSource,
  };
};

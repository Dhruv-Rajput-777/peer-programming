const errorReducer = (state = { show: false, error: "" }, action) => {
  switch (action.type) {
    case "SHOW_ERROR":
      return {
        ...state,
        show: true,
        error: action.payload,
      };
    case "HIDE_ERROR":
      return {
        ...state,
        show: false,
        error: "",
      };
    default:
      return state;
  }
};

export default errorReducer;
const signupReducer = (state = { username: "", password: "" }, action) => {
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        [action.payload.name]: action.payload.value,
      };
    default:
      return state;
  }
};

export default signupReducer;

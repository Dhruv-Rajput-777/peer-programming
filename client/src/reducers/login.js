const loginReducer = (state = { username: "test", password: "test" }, action) => {
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        [action.payload.name]: action.payload.value,
      }
    default:
      return state;
  }
};

export default loginReducer;

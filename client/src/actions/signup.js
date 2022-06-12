export const setUser = (name, value) => {
  return {
    type: "SET_USER",
    payload: {
      name,
      value,
    },
  };
};

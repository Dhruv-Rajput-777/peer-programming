export const showError = (error) => {
  return { type: "SHOW_ERROR", payload: error };
};

export const hideError = () => {
  return { type: "HIDE_ERROR" };
};

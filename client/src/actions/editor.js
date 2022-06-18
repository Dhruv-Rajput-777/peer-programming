export const setEditorCode = (code) => {
  return { type: "SET_EDITOR_CODE", payload: code };
};

export const resetEditorCode = () => {
  return { type: "RESET_EDITOR_CODE" };
};

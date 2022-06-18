const editorThemeReducer = (state = "dark", action) => {
  switch (action.type) {
    case "SET_EDITOR_THEME":
      return action.payload;
    default:
      return state;
  }
};

export { editorThemeReducer };

const defaultTemplate =
  "#include <bits/stdc++.h>\nusing namespace std;\n\nint main() {\n\n  return 0;\n}";

const setEditorCodeReducer = (state = defaultTemplate, action) => {
  switch (action.type) {
    case "SET_EDITOR_CODE":
      return action.payload;
    case "RESET_EDITOR_CODE":
      return defaultTemplate;
    default:
      return state;
  }
};

export { setEditorCodeReducer };

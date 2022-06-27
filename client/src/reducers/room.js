const activeFileReducer = (state = "editor", action) => {
  switch (action.type) {
    case "SET_ACTIVE_FILE":
      return action.payload;
    default:
      return state;
  }
};

const setBoardTypeReducer = (state = "editor", action) => {
  switch (action.type) {
    case "SET_BOARD_TYPE":
      return action.payload;
    default:
      return state;
  }
};

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

const editorThemeReducer = (state = "dark", action) => {
  switch (action.type) {
    case "SET_EDITOR_THEME":
      return action.payload;
    default:
      return state;
  }
};

const inputFileReducer = (state = "", action) => {
  switch (action.type) {
    case "SET_INPUT_FILE":
      return action.payload;
    default:
      return state;
  }
};

const outputFileReducer = (state = "", action) => {
  switch (action.type) {
    case "SET_OUTPUT_FILE":
      return action.payload;
    default:
      return state;
  }
};

const toggleMicReducer = (state = "mute", action) => {
  switch (action.type) {
    case "TOGGLE_MIC":
      return state === "mute" ? "unmute" : "mute";
    default:
      return state;
  }
};
const showParticipantsReducer = (state = false, action) => {
  switch (action.type) {
    case "SHOW_PARTICIPANTS":
      return state ? false : true;
    default:
      return state;
  }
};

const updateParticipantsReducer = (state = [], action) => {
  switch (action.type) {
    case "SET_PARTICIPANTS":
      return action.payload;
    case "ADD_PARTICIPANT":
      return state.includes(action.payload)
        ? state
        : [...state, action.payload];
    case "REMOVE_PARTICIPANT":
      return state.filter((name) => name !== action.payload);
    default:
      return state;
  }
};

const setQuestionReducer = (state = "", action) => {
  switch (action.type) {
    case "SET_QUESTION":
      return action.payload;
    default:
      return state;
  }
};

const setQuestionSourceReducer = (state = "default.png", action) => {
  switch (action.type) {
    case "SET_QUESTION_SOURCE":
      return action.payload;
    default:
      return state;
  }
};

const roomDetailsReducer = (state = { available: null }, action) => {
  switch (action.type) {
    case "SET_ROOM_DETAILS":
      return action.payload;
    default:
      return state;
  }
};

export {
  activeFileReducer,
  setBoardTypeReducer,
  setEditorCodeReducer,
  editorThemeReducer,
  inputFileReducer,
  outputFileReducer,
  toggleMicReducer,
  showParticipantsReducer,
  updateParticipantsReducer,
  setQuestionReducer,
  setQuestionSourceReducer,
  roomDetailsReducer,
};

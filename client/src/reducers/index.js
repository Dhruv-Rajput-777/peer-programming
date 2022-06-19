import { combineReducers } from "redux";

import loginReducer from "./login";
import signupReducer from "./signup";
import errorReducer from "./error";
import { editorThemeReducer } from "./editorTools";
import { setEditorCodeReducer } from "./editor";
import { inputFileReducer } from "./inputFile";
import { outputFileReducer } from "./outputFile";
import { activeFileReducer } from "./activeFile";
import { setBoardTypeReducer } from "./changeBoard";
import { toggleMicReducer } from "./mic";
import { showParticipantsReducer } from "./participants";
import { setQuestionReducer, setQuestionSourceReducer } from "./question";

export default combineReducers({
  loginReducer,
  signupReducer,
  errorReducer,
  editorThemeReducer,
  setEditorCodeReducer,
  inputFileReducer,
  outputFileReducer,
  activeFileReducer,
  setBoardTypeReducer,
  toggleMicReducer,
  showParticipantsReducer,
  setQuestionReducer,
  setQuestionSourceReducer,
});

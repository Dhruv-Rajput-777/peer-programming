import { combineReducers } from "redux";

import loginReducer from "./login";
import signupReducer from "./signup";
import errorReducer from "./error";
import {
  setBoardTypeReducer,
  setEditorCodeReducer,
  editorThemeReducer,
  activeFileReducer,
  inputFileReducer,
  outputFileReducer,
  toggleMicReducer,
  showParticipantsReducer,
  updateParticipantsReducer,
  setQuestionReducer,
  setQuestionSourceReducer,
  roomDetailsReducer,
} from "./room";
import { roomModalReducer } from "./dashboard";

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
  updateParticipantsReducer,
  roomModalReducer,
  roomDetailsReducer,
});

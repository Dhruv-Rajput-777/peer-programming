import { combineReducers } from "redux";

import loginReducer from "./login";
import signupReducer from "./signup";
import errorReducer from "./error";

export default combineReducers({
    loginReducer,
    signupReducer,
    errorReducer,
});

import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import authReducer from "./auth";
import streamReducer from "./stream";

/**
 * @author dbatista
 */
export default combineReducers({
  auth: authReducer,
  form: formReducer,
  streams: streamReducer,
});

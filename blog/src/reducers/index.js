import { combineReducers } from "redux";

import postReducer from "./post";

/**
 * Store
 */
export default combineReducers({
  posts: postReducer,
});

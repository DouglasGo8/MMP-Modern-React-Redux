import { combineReducers } from "redux";

import postReducer from "./post";
import usersReducer from "./users";
/**
 * Store
 */
export default combineReducers({
  posts: postReducer,
  users: usersReducer,
});

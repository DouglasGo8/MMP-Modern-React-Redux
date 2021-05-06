import _ from "lodash";

import {
  EDIT_STREAM,
  FETCH_STREAM,
  CREATE_STREAM,
  FETCH_STREAMS,
  DELETE_STREAM,
} from "../actions/types";

/**
 *
 */
export default (state = {}, action) => {
  switch (action.type) {
    case EDIT_STREAM:
    case FETCH_STREAM:
    case CREATE_STREAM:
      return { ...state, [action.payload.id]: action.payload };
    case FETCH_STREAMS:
      return { ...state, ..._.mapKeys(action.payload, "_id") };
    case DELETE_STREAM:
      return _.omit(state, action.payload); // dispatch(id) = payload
    default:
      return state;
  }
};

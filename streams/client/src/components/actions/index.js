import streamAPI from "../../apis/streams";
import history from "../../history";

import {
  SIGN_IN,
  SIGN_OUT,
  EDIT_STREAM,
  FETCH_STREAM,
  CREATE_STREAM,
  FETCH_STREAMS,
  DELETE_STREAM,
} from "./types";

/**
 *
 */
export const singIn = (userId) => {
  return {
    type: SIGN_IN,
    payload: userId,
  };
};

/**
 *
 */
export const signOut = () => {
  return {
    type: SIGN_OUT,
  };
};

/**
 * Create a Record
 * @param {*} formValues
 */
export const createStream = (formValues) => async (dispatch, getState) => {
  // console.log(formValues);
  const { userId } = getState().auth;
  const resp = await streamAPI.post("/create", { ...formValues, userId });
  // console.log(resp.data);
  dispatch({ type: CREATE_STREAM, payload: resp.data });
  history.push("/");
};

/**
 * List all Records
 * @returns
 */
export const fetchStreams = () => async (dispatch) => {
  const response = await streamAPI.get("/all");
  dispatch({ type: FETCH_STREAMS, payload: response.data });
};

/**
 * Get one particular stream
 * @param {*} id
 * @returns
 */
export const fetchStream = (id) => async (dispatch) => {
  const resp = await streamAPI.get(`/id/${id}`);
  dispatch({ type: FETCH_STREAM, payload: resp.data });
};

/**
 * Update a Stream
 * @param {*} id
 * @param {*} formValues
 * @returns
 */
export const editStream = (id, formValues) => async (dispatch) => {

  //console.log(formValues);

  const resp = await streamAPI.put(`/edit/${id}`, formValues);
  
  dispatch({ type: EDIT_STREAM, payload: resp.data });
  history.push("/");
};

/**
 * Delete a Stream
 * @param {*} id
 * @returns
 */
export const deleteStream = (id) => async (dispatch) => {
  await streamAPI.delete(`/delete/${id}`);
  dispatch({ type: DELETE_STREAM, payload: id });
};

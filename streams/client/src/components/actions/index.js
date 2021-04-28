import streamAPI from "../../apis/streams";

import { SIGN_IN, SIGN_OUT } from "./types";

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
 *
 * @param {*} formValues
 */
export const createStream = (formValues) => async (dispatch) => {
  console.log(formValues);
  // streamAPI.post("/create", formValues);
};

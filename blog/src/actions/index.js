import _ from "lodash";
import jsonPlaceHolderAPI from "../apis/typicode";

/**
 *
 * @param {*} id
 * @param {*} dispatch (callback)
 * @returns
 */
/*export const fetchPostAndUsers = () => async (dispatch, getState) => {
  await dispatch(fetchPosts());

  const ids = _.uniq(_.map(getState().posts, "userId"));

  ids.forEach((id) => dispatch(fetchUser(id)));

  _.chain()
};*/

/**
 *
 * @param {*} id
 * @param {*} dispatch (callback)
 * @returns
 */
export const fetchPostAndUsers = () => async (dispatch, getState) => {
  await dispatch(fetchPosts());

  _.chain(getState().posts)
    .map("userId")
    .uniq()
    .forEach((id) => dispatch(fetchUser(id)))
    .value(); // mandatory defer pipeline
};

/**
 * Action Creators
 * @param {*} dispatch (callback)
 * @returns
 */
export const fetchPosts = () => async (dispatch) => {
  const resp = await jsonPlaceHolderAPI.get("/posts");
  /**
   * Action
   */
  dispatch({
    type: "FETCH_POSTS",
    payload: resp.data,
  });
};

/**
 *
 * @param {*} id
 * @param {*} dispatch (callback)
 * @returns
 */
//export const fetchUser = (id) => (dispatch) => _fetchUser(id, dispatch);

/**
 *
 * @param {*} id
 * @param {*} dispatch (callback)
 * @returns
 */
/*const _fetchUser = _.memoize(async (id, dispatch) => {
  //console.log(id);
  const resp = await jsonPlaceHolderAPI.get(`/users/${id}`);
  dispatch({ type: "FETCH_USER", payload: resp.data });
});*/

export const fetchUser = (id) => async (dispatch) => {
  const resp = await jsonPlaceHolderAPI.get(`/users/${id}`);
  dispatch({ type: "FETCH_USER", payload: resp.data });
};

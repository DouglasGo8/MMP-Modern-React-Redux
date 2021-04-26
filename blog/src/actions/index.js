import jsonPlaceHolderAPI from "../apis/typicode";

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

import jsonPlaceHolderAPI from "../apis/typicode";

/**
 *
 * @returns
 */
export const fetchPosts = () => async (dispatch) => {
  const resp = await jsonPlaceHolderAPI.get("/posts");
  dispatch({
    type: "FETCH_POSTS",
    payload: resp,
  });
};

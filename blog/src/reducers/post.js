/**
 * Must not mutate its input 'state' arg
 * @param {*} state
 * @param {*} action
 */
export default (state = [], action) => {
  // bad
  //return document.querySelector(...)

  // bad
  // return axios.get('apis-bla')

  // good
  // state + action

  switch (action.type) {
    case "FETCH_POSTS":
      return action.payload;
    default:
      return state;
  }
};

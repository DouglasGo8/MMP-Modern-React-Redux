/**
 * Must not mutate its input 'state' arg
 * @param {*} state
 * @param {*} action
 */
export default (state = [], action) => {
  switch (action.type) {
    case "FETCH_USER":
      return [...state, action.payload];
    default:
      return state;
  }
};

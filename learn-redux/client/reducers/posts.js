// a reducer takes: the state, an action.
// and returns: the new state.

export default function posts(state = [], action) {
  console.log(state, action);
  return state;
}

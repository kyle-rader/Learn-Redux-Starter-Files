// a reducer takes: the state, an action.
// and returns: the new state.

export default function posts(state = [], action) {
  switch(action.type) {
    case 'INCREMENT_LIKES':
      // return updated state
      const i = action.index;
      return [
        ...state.slice(0,i), // before our index
        {...state[i], likes: state[i].likes + 1}, // update out post in question
        ...state.slice(i + 1), // everything after our index
      ];
    default:
      return state;
  }
}

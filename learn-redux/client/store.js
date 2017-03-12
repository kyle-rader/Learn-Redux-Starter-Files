import { createStore, compose } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';

// import our root reducer
import rootReducer from './reducers/index';

// import our dummy data
import posts from './data/posts';
import comments from './data/comments';

// create an object for the default data
const defaultState = {
  posts,
  comments,
};

export const store = createStore(rootReducer, defaultState);
export const history = syncHistoryWithStore(browserHistory, store);

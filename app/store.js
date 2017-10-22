import { createStore, applyMiddleware } from 'redux';
import commentsReducer from './reducers/comments';
import thunkMiddleware from 'redux-thunk';

const store = createStore(
    commentsReducer,
    applyMiddleware(
        thunkMiddleware
    )
);
export default store;
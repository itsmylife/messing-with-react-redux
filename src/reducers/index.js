import commentsReducer from 'reducers/comments/commentsReducer';
import { combineReducers } from 'redux';

export default combineReducers({
  comments: commentsReducer
});

import auth from 'reducers/auth';
import comments from 'reducers/comments';
import { combineReducers } from 'redux';

export default combineReducers({
  comments,
  auth
});

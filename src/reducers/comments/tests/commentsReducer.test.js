import { FETCH_COMMENTS, SAVE_COMMENT } from 'actions/types';
import commentsReducer from 'reducers/comments/commentsReducer';


it('handles actions of type SAVE_COMMENT', () => {
  const payloadToTest = 'New Comment';
  const action = {
    type: SAVE_COMMENT,
    payload: payloadToTest
  };

  const newState = commentsReducer([], action);

  expect(newState).toEqual([payloadToTest]);
});

it('handles actions with unknown type', () => {
  const newState = commentsReducer([], {});

  expect(newState).toEqual([]);
});


it('handles actions of type FETCH_COMMENTS', () => {
  const payloadToTest = 'New Comment';
  const action = {
    type: FETCH_COMMENTS,
    payload: { data: [{ name: payloadToTest }] }
  };

  const newState = commentsReducer([], action);

  expect(newState).toEqual([payloadToTest]);
});

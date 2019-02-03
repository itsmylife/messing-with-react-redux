import { SAVE_COMMENTS } from 'actions/types';
import React from 'react';
import commentsReducer from 'reducers/comments';


it('handles actions of type SAVE_COMMENT', () => {
  const payloadToTest = 'New Comment';
  const action = {
    type: SAVE_COMMENTS,
    payload: payloadToTest
  };

  const newState = commentsReducer([], action);

  expect(newState).toEqual([payloadToTest]);
});

it('handles actions with unknown type', () => {
  const newState = commentsReducer([], {});

  expect(newState).toEqual([]);
});


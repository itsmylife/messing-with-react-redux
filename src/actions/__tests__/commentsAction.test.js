import { fetchComments, saveComment } from 'actions/commentsActions';
import { FETCH_COMMENTS, SAVE_COMMENT } from 'actions/types';

describe('saveComment ', () => {

  it('has the correct type', () => {
    const action = saveComment();
    expect(action.type).toEqual(SAVE_COMMENT);
  });

  it('has the correct payload', () => {
    const payload = 'New Comment';
    const action = saveComment(payload);
    expect(action.payload).toEqual(payload);
  });

});

describe('fetchComments', () => {

  it('has the correct type', () => {
    const action = fetchComments();
    expect(action.type).toEqual(FETCH_COMMENTS);
  });

  it('has the correct payload', () => {
    const action = fetchComments();
    expect(action.payload).toBeDefined();
  });

});


import { saveComment } from 'actions/index';
import { SAVE_COMMENT } from 'actions/types';

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


import { changeAuth } from 'actions/auth';
import { CHANGE_AUTH } from 'actions/types';

describe('changeAuth ', () => {

  it('has the correct type', () => {
    const action = changeAuth();
    expect(action.type).toEqual(CHANGE_AUTH);
  });

  it('has the correct payload', () => {
    const payload = true;
    const action = changeAuth(payload);
    expect(action.payload).toEqual(payload);
  });

});

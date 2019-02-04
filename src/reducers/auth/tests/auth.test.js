import { CHANGE_AUTH, } from 'actions/types';
import authReducer from 'reducers/auth';


it('handles actions with unknown type', () => {
  const newState = authReducer(undefined, {});

  expect(newState).toEqual(false);
});


it('handles actions of type CHANGE_AUTH', () => {
  const payloadToTest = true;
  const action = {
    type: CHANGE_AUTH,
    payload: payloadToTest
  };

  const newState = authReducer(undefined, action);

  expect(newState).toEqual(payloadToTest);
});


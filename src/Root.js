import PropTypes from 'prop-types';
import React from 'react';
import { Provider } from 'react-redux';
import reducers from 'reducers';
import { applyMiddleware, createStore } from 'redux';
import reduxPromise from 'redux-promise';

const Root = ({ children, initialState = {} }) => {
  const store = createStore(
    reducers,
    initialState,
    applyMiddleware(reduxPromise)
  );

  return (
    <Provider store={ store }>
      { children }
    </Provider>
  );

};

Root.propTypes = {
  initialState: PropTypes.object
};

export default Root;

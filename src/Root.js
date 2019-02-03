import PropTypes from 'prop-types';
import React from 'react';
import { Provider } from 'react-redux';
import reducers from 'reducers';
import { createStore } from 'redux';

const Root = ({ children, initialState = {} }) => {
  return (
    <Provider store={ createStore(reducers, initialState) }>
      { children }
    </Provider>
  );

};

Root.propTypes = {
  initialState: PropTypes.object
};

export default Root;

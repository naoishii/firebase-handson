import {
  createStore as reduxCreateStore,
  combineReducers,
  applyMiddleware,
} from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import modules from './modules';

const middlewares = [thunk, logger];

export default function() {
  const reducer = combineReducers(modules);
  return reduxCreateStore(reducer, applyMiddleware(...middlewares));
}

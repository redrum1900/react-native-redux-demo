import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { persistStore } from 'redux-persist';

import reducer from './reducer';

const getMiddleware = () => {
  const middlewares = [thunk];
  if (__DEV__) {
    middlewares.push(createLogger());
  }

  return applyMiddleware(...middlewares);
};

export const store = createStore(reducer, getMiddleware());

export const persistor = persistStore(store);

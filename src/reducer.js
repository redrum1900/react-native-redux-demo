import { persistCombineReducers } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { globalReducer } from './global/reducer';
import { homeReducer } from './pages/Home/reducer';

const config = {
  key: 'root',
  storage,
  whitelist: ['home'],
  // blacklist: ['global'],
};

const reducer = persistCombineReducers(config, {
  global: globalReducer,
  home: homeReducer,
});

export default reducer;

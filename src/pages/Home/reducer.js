import { UPDATESTATE } from './types';

const initialState = {
  count: 0,
};

export const homeReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case UPDATESTATE:
      return { ...state, ...action.data };
    default:
      return state;
  }
};

export default homeReducer;

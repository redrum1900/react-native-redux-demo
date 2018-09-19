import { LOADING } from './types';

const initialState = {
  loading: false,
};

export const globalReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case LOADING:
      return { ...state, loading: action.data };
    default:
      return state;
  }
};

export default globalReducer;

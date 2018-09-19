import { UPDATESTATE } from './types';
import { LOADING } from '../../global/types';

export const onUpdateState = payload => dispatch => dispatch({ type: UPDATESTATE, data: payload });

export default onUpdateState;

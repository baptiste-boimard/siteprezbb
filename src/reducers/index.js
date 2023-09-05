import { combineReducers } from 'redux';

// ==-- IMPORT SLICE--==
import utilitiesSlice from '../slice/utilities';

const rootReducer = combineReducers({
  utilitiesReducer: utilitiesSlice,
});

export default rootReducer;
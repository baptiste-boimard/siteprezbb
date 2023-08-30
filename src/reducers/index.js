import { combineReducers } from 'redux';

// ==-- IMPORT SLICE--==
import boardSlice from '../slice/board';
import utilitiesSlice from '../slice/utilities';


const rootReducer = combineReducers({
  boardReducer: boardSlice,
  utilitiesReducer: utilitiesSlice,
});

export default rootReducer;
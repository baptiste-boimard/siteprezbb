import { combineReducers } from 'redux';

// ==-- IMPORT SLICE--==
import boardSlice from '../slice/board';


const rootReducer = combineReducers({
  boardReducer: boardSlice,
});

export default rootReducer;
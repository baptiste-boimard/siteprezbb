import {createSlice} from '@reduxjs/toolkit'

const initialState = {
board : [],
boardY : 4,
boardX : 7,
coucou : "",
};

const boardSlice = createSlice({
  name: "board",
  initialState,
  reducers: {
    changeBoard : (state, action) => {
      console.log('coucou',action.payload);
      state.board = action.payload;
    },
    value : (state) => {
      // state.coucou = "coucou";
      console.log('coucoucoucou');
    }
  }

});

export const {
  changeBoard,
  value,
} = boardSlice.actions;

export default boardSlice.reducer;
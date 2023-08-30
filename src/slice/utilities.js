import {createSlice} from '@reduxjs/toolkit'

const initialState = {
isOpenCv : true,
};

const utilitiesSlice = createSlice({
  name: "utilities",
  initialState,
  reducers: {
    openCv : (state, _) => {
      state.isOpenCv = !state.isOpenCv;
    },
  }

});

export const {
  openCv,
} = utilitiesSlice.actions;

export default utilitiesSlice.reducer;
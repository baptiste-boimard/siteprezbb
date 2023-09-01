import {createSlice} from '@reduxjs/toolkit'

const initialState = {
isOpenCv : false,
isOpenGit : false,
isOpenLetter : false,
isOpenVideo : false,
};

const utilitiesSlice = createSlice({
  name: "utilities",
  initialState,
  reducers: {
    openCv : (state, _) => {
      state.isOpenCv = !state.isOpenCv;
    },
    openGit : (state, _) => {
      state.isOpenGit = !state.isOpenGit;
    },
    openLetter : (state, _) => {
      state.isOpenLetter = !state.isOpenLetter;
    },
    openVideo: (state, _) => {
      state.isOpenVideo = !state.isOpenVideo;
    },
  }

});

export const {
  openCv,
  openGit,
  openLetter,
  openVideo,
} = utilitiesSlice.actions;

export default utilitiesSlice.reducer;
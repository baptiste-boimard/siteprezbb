import {createSlice} from '@reduxjs/toolkit'

const initialState = {
isOpenCv : false,
isOpenGit : false,
isOpenLetter : false,
isOpenVideo : false,
isOpenNws : false,
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
    openNws: (state, _) => {
      state.isOpenNws = !state.isOpenNws;
    },
    closeAllModal: (state, _) => {
      state.isOpenCv = false;
      state.isOpenGit = false;
      state.isOpenLetter = false;
      state.isOpenVideo = false;
      state.isOpenNws = false;

    },
  }

});

export const {
  openCv,
  openGit,
  openLetter,
  openVideo,
  openNws,
  closeAllModal,
} = utilitiesSlice.actions;

export default utilitiesSlice.reducer;
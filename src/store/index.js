import { configureStore } from '@reduxjs/toolkit';

import rootReducer from '../reducer';
// import middlewareCompose from '../middlewares';

const store = configureStore({
  reducer: rootReducer,
});

export default store;
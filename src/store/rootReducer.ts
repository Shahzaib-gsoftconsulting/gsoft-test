//  combines all th existing reducers

import { combineReducers } from "@reduxjs/toolkit";
import themeSlice from "./slices/themeSlice";

import authSlice from "./slices/authSlice";

const reducers = {
  theme: themeSlice,
  auth: authSlice,

};

// Exports

const rootReducer = combineReducers(reducers);
export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;


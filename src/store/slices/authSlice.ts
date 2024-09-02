import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AuthSliceState {
  user: string | null;
}

const initialState: AuthSliceState = {
  user: null,
};

const authSlice = createSlice({
  name: "authSlice",
  initialState,
  reducers: {
    onLogout: () => initialState,
    saveUserData: (state, action: PayloadAction<string>) => {
      state.user = action.payload;
    },
  },
});

export const { saveUserData, onLogout } = authSlice.actions;

export default authSlice.reducer;

export const selectSessionInfo = (state: { auth: AuthSliceState }) => state.auth.user;
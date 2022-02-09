import { createSlice } from '@reduxjs/toolkit'

const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: 0,
  },
  reducers: {
    login: (state, action) => {
        state.user = action.payload;
    },
    signUp: (state, action) => {
      state.user = action.payload;
    },
    logout: (state) => {
        state.user = null;
    },
  },
});

export const { login,logout, signUp } = userSlice.actions;

export const selectUser = (state) => state.user.user;
export default userSlice.reducer

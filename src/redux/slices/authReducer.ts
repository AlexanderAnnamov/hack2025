import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UserState {
  user: null | {
    uid: string;
    email: string;
    fullName: string;
  };
}

const initialState: UserState = {
  user: null,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<UserState['user']>) => {
      state.user = action.payload;
    },
    logout: (state) => {
      state.user = null;
    },
  },
});

export const { setUser, logout } = authSlice.actions;
export default authSlice.reducer;
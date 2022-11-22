import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'userConnected',
  initialState: {
    userConnected: '',
  },
  reducers: {
    setUserConnected: (state, action) => {
      state.userConnected = action.payload;
    },
  },
});

export default userSlice.reducer;
export const { setUserConnected } = userSlice.actions;

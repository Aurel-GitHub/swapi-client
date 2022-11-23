import { createSlice } from '@reduxjs/toolkit';

export const langSlice = createSlice({
  name: 'isWookieActived',
  initialState: {
    isWookieActived: 0,
  },
  reducers: {
    setWookieLang: (state, action) => {
      state.isWookieActived = action.payload;
    },
  },
});

export default langSlice.reducer;
export const { setWookieLang } = langSlice.actions;

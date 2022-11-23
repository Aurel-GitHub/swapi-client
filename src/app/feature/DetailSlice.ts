import { createSlice } from '@reduxjs/toolkit';

export const detailSlice = createSlice({
  name: 'detailSelected',
  initialState: {
    detailSelected: [],
  },
  reducers: {
    setDetail: (state, action) => {
      state.detailSelected = action.payload;
    },
  },
});

export default detailSlice.reducer;
export const { setDetail } = detailSlice.actions;

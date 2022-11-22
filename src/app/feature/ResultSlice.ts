import { createSlice } from '@reduxjs/toolkit';

export const resultSlice = createSlice({
  name: 'swapi',
  initialState: {
    swapi: [],
  },
  reducers: {
    setSwapiData: (state, action) => {
      state.swapi = action.payload;
    },
  },
});
export default resultSlice.reducer;
export const { setSwapiData } = resultSlice.actions;

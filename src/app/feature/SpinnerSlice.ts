import { createSlice } from '@reduxjs/toolkit';

export const spinnerSlice = createSlice({
  name: 'isLoading',
  initialState: {
    isLoading: false,
  },
  reducers: {
    setIsLoading: (state, action) => {
      state.isLoading = action.payload;
    },
  },
});

export default spinnerSlice.reducer;
export const { setIsLoading } = spinnerSlice.actions;

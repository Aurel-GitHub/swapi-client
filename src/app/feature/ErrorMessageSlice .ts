import { createSlice } from '@reduxjs/toolkit';

export const errorMessageSlice = createSlice({
  name: 'errorMessage',
  initialState: {
    errorMessage: '',
  },
  reducers: {
    setErrorMessage: (state, action) => {
      state.errorMessage = action.payload;
    },
  },
});

export default errorMessageSlice.reducer;
export const { setErrorMessage } = errorMessageSlice.actions;

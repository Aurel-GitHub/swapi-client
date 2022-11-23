import { createSlice } from '@reduxjs/toolkit';

export const categorieSlice = createSlice({
  name: 'categoriseSelected',
  initialState: {
    categorieSelected: '',
  },
  reducers: {
    setCategorie: (state, action) => {
      state.categorieSelected = action.payload;
    },
  },
});

export default categorieSlice.reducer;
export const { setCategorie } = categorieSlice.actions;

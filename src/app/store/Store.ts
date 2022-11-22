import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../feature/UserSlice';
import resultReducer from '../feature/ResultSlice';

export const store = configureStore({
  reducer: {
    userConnected: userReducer,
    swapi: resultReducer,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

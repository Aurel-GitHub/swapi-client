import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../feature/UserSlice';

export const store = configureStore({
  reducer: {
    userConnected: userReducer,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../feature/UserSlice';
import resultReducer from '../feature/ResultSlice';
import spinnerReducer from '../feature/SpinnerSlice';

export const store = configureStore({
  reducer: {
    userConnected: userReducer,
    swapi: resultReducer,
    isLoading: spinnerReducer,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

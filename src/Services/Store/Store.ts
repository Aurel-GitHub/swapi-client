import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../Feature/UserSlice';
import resultReducer from '../Feature/ResultSlice';
import spinnerReducer from '../Feature/SpinnerSlice';
import langReducer from '../Feature/LangSlice';
import categorieReducer from '../Feature/CategorieSlice';
import errorMessageReducer from '../Feature/ErrorMessageSlice ';

export const store = configureStore({
  reducer: {
    userConnected: userReducer,
    swapi: resultReducer,
    isLoading: spinnerReducer,
    isWookieActived: langReducer,
    categorieSelected: categorieReducer,
    errorMessage: errorMessageReducer,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

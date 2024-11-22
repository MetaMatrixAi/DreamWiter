import { configureStore } from '@reduxjs/toolkit';
import exampleReducer from './exampleSlice';

const store = configureStore({
  reducer: {
    example: exampleReducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

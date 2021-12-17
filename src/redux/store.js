import { configureStore } from '@reduxjs/toolkit';
import serviceReducer from '../redux/slices/serviceSlice';

export const store = configureStore({
    reducer: {
        services: serviceReducer,
  },
})

import { configureStore } from '@reduxjs/toolkit';
import { api } from './features/slices/apiSlice';

const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
  },
  middleware: (gDM) => gDM().concat(api.middleware),
});

export default store;

import { configureStore } from '@reduxjs/toolkit';
import { pokemonApi } from './pokemonApi';
import { setupListeners } from '@reduxjs/toolkit/query';
import { todosApi } from './todosSlice';
export const store = configureStore({
  reducer: {
    [pokemonApi.reducerPath]: pokemonApi.reducer,
    [todosApi.reducerPath]: todosApi.reducer,
  },
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware(),
    pokemonApi.middleware,
    todosApi.middleware,
  ],
});

setupListeners(store.dispatch);

import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './rootReducer';
import { postsApi } from './features/tweets/postsApi';



const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddlware) => getDefaultMiddlware().concat(postsApi.middleware)
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
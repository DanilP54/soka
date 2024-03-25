import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './rootReducer';
import { tweetsApi } from './features/tweets/tweetsApi';



const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddlware) => getDefaultMiddlware().concat(tweetsApi.middleware)
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
import { combineReducers } from "@reduxjs/toolkit";
import authSlice from "./features/auth/authSlice";
import { postsApi } from "./features/tweets/postsApi";


const rootReducer = combineReducers({
    auth: authSlice,
    [postsApi.reducerPath]: postsApi.reducer,
})


export default rootReducer;


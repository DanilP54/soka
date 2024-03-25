import { combineReducers } from "@reduxjs/toolkit";
import authSlice from "./features/auth/authSlice";
import { tweetsApi } from "./features/tweets/tweetsApi";


const rootReducer = combineReducers({
    auth: authSlice,
    [tweetsApi.reducerPath]: tweetsApi.reducer,
})


export default rootReducer;

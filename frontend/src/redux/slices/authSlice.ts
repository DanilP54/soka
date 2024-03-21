import { createSlice } from '@reduxjs/toolkit';

const initialValue = {
    isAuth: false,
    currentUser: {
        email: null,
        password: null,
    },
    birthDate: {
        month: null,
        day: null,
        year: null,
    }
}

const authSlice = createSlice({
    name: 'auth',
    initialValue,
    reducers: {}
})

export default authSlice.reducer



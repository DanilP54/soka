import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';


interface AuthState {
    isAuth: boolean;
    currentUser: {
        email: string | null;
        password: string | null;
    };
    birthDate: {
        month: string | null;
        day: string | null;
        year: string | null;
    };
}


const initialState: AuthState = {
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
    initialState,
    reducers: {

    }
})

export default authSlice.reducer



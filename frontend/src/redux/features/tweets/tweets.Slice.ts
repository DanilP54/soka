import { createSlice } from "@reduxjs/toolkit";


interface TweetsState {
    fullname: string | null;
    username: string | null;
    avatar: string | null;
    birthdate: string | null;
    image: string | null;
    date: string | null;
    id: string | null;
}

const initialState: TweetsState = {
    fullname: null,
    username: null,
    avatar: null,
    birthdate: null,
    image: null,
    date: null,
    id: null,
}


const tweetsSlice = createSlice({
    name: 'tweets',
    initialState,
    reducers: {}
})




export default tweetsSlice.reducer
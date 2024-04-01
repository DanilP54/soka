import { createSlice } from "@reduxjs/toolkit";


interface postsState {
    fullname: string | null;
    username: string | null;
    avatar: string | null;
    birthdate: string | null;
    image: string | null;
    date: string | null;
    id: string | null;
}

const initialState: postsState = {
    fullname: null,
    username: null,
    avatar: null,
    birthdate: null,
    image: null,
    date: null,
    id: null,
}


const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {}
})




export default postsSlice.reducer
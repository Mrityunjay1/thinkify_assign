import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";



const initialState = {
    posts: [],
    loading: false,
    error: null,
};

export const postFetch = createAsyncThunk(
    "post/postFetch",
    async ()=>{
     const res = await axios.get("https://flipkart-email-mock.vercel.app")
     return res?.data
    }
);


const postSlice = createSlice({
    name: "post",
    initialState,
    reducers: {},
    extraReducers: {
        [postFetch.pending]: (state) => {
            state.loading = true;
        },
        [postFetch.fulfilled]: (state, action) => {
            state.posts = action.payload;
            state.loading = false;
        },
        [postFetch.rejected]: (state, action) => {
            state.error = action.error.message;
            state.loading = false;
        }

    }
});


export default postSlice.reducer;
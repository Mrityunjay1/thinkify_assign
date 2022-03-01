import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState = {
    posts: [],
    loading: false,
    error: null,
};


const favouriteSlice = createSlice({
    name: "favourite",
    initialState,
    reducers:{
        addFavourite: (state, action) => {
           const postIndex= state.posts.findIndex(post => post.id === action.payload.id)
            if(postIndex >= 0){
                toast.info("Post already added to favourite",{
                    position: "bottom-left"
                })
            }else{
            const tempPost= {...action.payload,postQuantity:1};
            state.posts.push(tempPost);
            toast.success("Post added to favourite",{
                position: "bottom-left"
            })
            }
        }
    }
})

export const { addFavourite } = favouriteSlice.actions;
export default favouriteSlice.reducer;
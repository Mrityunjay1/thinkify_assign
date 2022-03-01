import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState = {
    posts: localStorage.getItem("favouritePosts")?JSON.parse(localStorage.getItem("favouritePosts")):[],
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

            localStorage.setItem("favouritePosts",JSON.stringify(state.posts));
        },
        removeFavourite: (state, action) => {
        const removePostItems =state.posts.filter(post => post.id !== action.payload.id);
        state.posts=removePostItems;
        localStorage.setItem("favouritePosts",JSON.stringify(state.posts));
        toast.error("Removed from favourite",{
            position: "bottom-left"
        })
        }
    }
})

export const { addFavourite ,removeFavourite} = favouriteSlice.actions;
export default favouriteSlice.reducer;
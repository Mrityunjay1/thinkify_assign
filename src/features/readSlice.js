import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState = {
    posts: localStorage.getItem("readPosts")?JSON.parse(localStorage.getItem("readPosts")):[],
    loading: false,
    error: null,
};


const readSlice = createSlice({
    name: "read",
    initialState,
    reducers:{
        addRead: (state, action) => {
           const postIndex= state.posts.findIndex(post => post.id === action.payload.id)
            if(postIndex >= 0){
                toast.info("you have already read the email",{
                    position: "bottom-left"
                })
            }else{
            const tempPost= {...action.payload,postQuantity:1};
            state.posts.push(tempPost);
            toast.success("Post added to favourite",{
                position: "bottom-left"
            })
            }

            localStorage.setItem("readPosts",JSON.stringify(state.posts));
        },
        removeRead: (state, action) => {
        const removePostItems =state.posts.filter(post => post.id !== action.payload.id);
        state.posts=removePostItems;
        localStorage.setItem("readPosts",JSON.stringify(state.posts));
        toast.error("Removed from Read",{
            position: "bottom-left"
        })
        }
    }
})

export const { addRead ,removeRead} = readSlice.actions;
export default readSlice.reducer;
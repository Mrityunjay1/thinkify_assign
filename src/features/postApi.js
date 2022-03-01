import {createApi,fetchBaseQuery} from '@reduxjs/toolkit/query/react'

export const postApi = createApi({
    reducerPath: 'postApi',
    baseQuery:fetchBaseQuery({baseUrl:' https://flipkart-email-mock.now.sh/'}),
    endpoints:(builder)=>({
        getAllPosts:builder.query({
            query:()=>'/',
        }),
        getPostById:builder.query({
            query:(id)=>`/?id=${id}`, 
        })
    }),
})

export const {useGetAllPostsQuery,useGetPostByIdQuery } = postApi;
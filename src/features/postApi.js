import {createApi,fetchBaseQuery} from '@reduxjs/toolkit/query/react'

export const postApi = createApi({
    reducerPath: 'postApi',
    baseQuery:fetchBaseQuery({baseUrl:'https://flipkart-email-mock.vercel.app'}),
    endpoints:(builder)=>({
        getAllPosts:builder.query({
            query:()=>'/',
        }),
    }),
})

export const {useGetAllPostsQuery} = postApi;
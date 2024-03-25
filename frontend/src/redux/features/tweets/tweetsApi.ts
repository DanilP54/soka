import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


export const tweetsApi = createApi({
    reducerPath: 'tweetsApi',
    tagTypes: ['Tweet'],
    baseQuery: fetchBaseQuery({ baseUrl: 'https://65dc6777e7edadead7ebe767.mockapi.io/' }),
    endpoints: (build) => ({
        getTweets: build.query({
            query: (limit = '') => `tweets?${limit && `p=1&l=${limit}`}`,
            providesTags: (result) =>
                result
                    ? [...result.map(({ id }) => ({ type: 'Tweet', id })), { type: 'Tweet', id: 'LIST' }]
                    : [{ type: 'Tweet', id: 'LIST' }],
        }),
        addTweet: build.mutation({
            query: (body) => ({
                url: 'tweets',
                method: 'POST',
                body
            }),
            invalidatesTags: [{ type: 'Tweet', id: 'LIST' }]
        }),
    })

});

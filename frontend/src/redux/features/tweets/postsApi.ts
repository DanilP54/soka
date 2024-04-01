import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export interface PostResponseType {
    avatar: string;
    image: string;
    fullname: string;
    username: string;
    text: string;
    id: string;
}

export interface PostsPagination {
    page: number;
    limit: number;
}

export const postsApi = createApi({
    reducerPath: 'postsApi',
    tagTypes: ['Posts'],
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://65dc6777e7edadead7ebe767.mockapi.io/',
    }),
    endpoints: (build) => ({
        getPosts: build.query<PostResponseType[], PostsPagination>({
            query: (pagination) => `tweets?${pagination.limit && `p=${pagination.page}&l=${pagination.limit}`}`,
            providesTags: (result = [], error, { page }) =>
                result
                    ? [...result.map(({ id }) => ({ type: 'Posts' as const, id })), { type: 'Posts', id: `LIST_${page}` }]
                    : [{ type: 'Posts', id: `LIST_${page}` }],
        }),
        addPosts: build.mutation({
            query: (body: PostResponseType) => ({
                url: 'tweets',
                method: 'POST',
                body
            }),
            invalidatesTags: [{ type: 'Posts', id: 'LIST' }]
        }),
    })

});




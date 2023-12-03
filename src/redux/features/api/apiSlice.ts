// Need to use the React-specific entry point to import createApi
import {createApi, fetchBaseQuery, FetchBaseQueryError} from '@reduxjs/toolkit/query/react'
import {Destination, DestinationResponse, SingleDestinationResponse} from "../../../data/destinations.ts";
import {DestinationCategory, DestinationCategoryResponse} from "../../../components/recommendedDestinations.tsx";
import {User, UserResponse} from "../userSlice.ts";
import {SerializedError} from "@reduxjs/toolkit";

const baseUrl = "http://proto.test/api/"
// const baseUrl = "https://proto-backend.omoding.com/api/"
// @ts-ignore
// @ts-ignore
// @ts-ignore
// @ts-ignore
// @ts-ignore
export const apiSlice = createApi({
    reducerPath: 'api',
    tagTypes: ['Destinations', 'User', 'DestinationCategory'],
    baseQuery: fetchBaseQuery({
            baseUrl: baseUrl
        }
    ),
    endpoints: (builder) => ({
        getDestinations: builder.query<DestinationResponse, number>({
            query: (category): string => `destinations/${category}`,
            providesTags: ['Destinations']
        }),
        allDestinations: builder.query<DestinationResponse, void>({
            query: (): string => `destinations`,
            providesTags: ['Destinations']
        }),
        getDestination: builder.query<SingleDestinationResponse, string|undefined>({
            query: (id): string => `show-destinations/${id}`,
            providesTags: ['Destinations']
        }),
        filteredDestinations: builder.query<DestinationResponse, string|undefined>({
            query: (data): string => `destinations-search/${data}`,
            providesTags: ['Destinations']
        }),
        createDestination: builder.mutation<Destination[], FormData>({
            query: (destination) => ({
                url: 'destinations',
                method: 'POST',
                body: destination,
                formData: true
            }),
            invalidatesTags: ['Destinations',]
        }),
        updateDestination: builder.mutation<Destination[], FormData>({
            query: (destination) => ({
                url: `update-destinations/${destination.get('id')}`,
                method: 'POST',
                body: destination
            }),
            invalidatesTags: ['Destinations']
        }),
        deleteDestination: builder.mutation<Destination[], {id:number|undefined}>({
            query: (body) => ({
                url: `delete-destination`,
                method: 'POST',
                body: body
            }),
            invalidatesTags: ['Destinations']
        }),

        getDestinationCategory: builder.query<DestinationCategoryResponse[], void>({
            query: () => `categories`,
            providesTags: ['DestinationCategory']
        }),
        createDestinationCategory: builder.mutation<DestinationCategoryResponse[], DestinationCategory>({
            query: (destination) => ({
                url: 'categories',
                method: 'POST',
                body: destination
            }),
            invalidatesTags: ['DestinationCategory',]
        }),
        updateDestinationCategory: builder.mutation<DestinationCategoryResponse[], DestinationCategory>({
            query: (destination) => ({
                url: `categories/${destination.id}`,
                method: 'PUT',
                body: destination
            }),
            invalidatesTags: ['DestinationCategory']
        }),
        deleteDestinationCategory: builder.mutation<DestinationCategoryResponse, DestinationCategory>({
            query: (body) => ({
                url: `categories`,
                method: 'POST',
                body: body
            }),
            invalidatesTags: ['DestinationCategory']
        }),

        createUser: builder.mutation<UserResponse, User>({
            query: (data) => ({
                url: 'users',
                method: 'POST',
                body: data
            }),
            invalidatesTags: ['User']
        }),
        login: builder.mutation<UserResponse | { error: FetchBaseQueryError | SerializedError }, User>({
            query: (data) => ({
                url: 'login',
                method: 'POST',
                body: data
            })
        }),
    }),
})

// export const {useGetUsersQuery, useGetContactsQuery, useGetUserByIDQuery} = apiSlice

export const {
    useGetDestinationCategoryQuery,
    useGetDestinationsQuery,
    useCreateDestinationCategoryMutation,
    useCreateDestinationMutation,
    useUpdateDestinationCategoryMutation,
    useUpdateDestinationMutation,
    useDeleteDestinationCategoryMutation,
    useDeleteDestinationMutation,
    useCreateUserMutation,
    useLoginMutation, useAllDestinationsQuery, useFilteredDestinationsQuery,useGetDestinationQuery
} = apiSlice

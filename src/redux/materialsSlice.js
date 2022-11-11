import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const materialsApi = createApi({
  reducerPath: 'materials',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://633f0dec0dbc3309f3c3fe56.mockapi.io',
  }),
  tagTypes: ['Material'],
  endpoints: builder => ({
    getMaterials: builder.query({
      query: () => '/materials',
      providesTags: ['Material'],
    }),
    getMaterialById: builder.query({
      query: id => `/materials/${id}`,
      providesTags: ['Material'],
    }),
    addMaterial: builder.mutation({
      query: values => ({
        url: '/materials',
        method: 'POST',
        body: values,
      }),
      invalidatesTags: ['Material'],
    }),
    deleteMaterial: builder.mutation({
      query: id => ({
        url: `/materials/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Material'],
    }),
    updateMaterial: builder.mutation({
      query: fields => ({
        url: `/materials/${fields.id}`,
        method: 'PUT',
        body: fields,
      }),
      invalidatesTags: ['Material'],
    }),
  }),
});

export const {
  useGetMaterialsQuery,
  useAddMaterialMutation,
  useDeleteMaterialMutation,
  useGetMaterialByIdQuery,
  useUpdateMaterialMutation,
} = materialsApi;

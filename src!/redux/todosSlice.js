import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const todosApi = createApi({
  reducerPath: 'todosApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://63641e237b209ece0f40efc6.mockapi.io/api/v1/',
  }),
  tagTypes: ['Todos'],
  // ключи в кеше для валидирования ресурса
  endpoints: builder => ({
    fetchTodos: builder.query({
      query: () => `/todos`,
      providesTags: ['Todos'],
      // при фетчи провайдим в тег  'Todos'
    }),
    // fetchTodosWithObj: builder.query({
    //   query: () => ({
    //     url: `/todos`,
    //     method: 'GET',
    //   }),
    // }),
    createTodos: builder.mutation({
      query: todoContent => ({
        url: `/todos`,
        method: 'POST',
        body: {
          content: todoContent,
        },
      }),
      invalidatesTags: ['Todos'],
      // при мутации обращаемся в тег  'Todos' чтобы обновить кеш и оно перерисовало все
    }),
    deleteTodos: builder.mutation({
      query: todoId => ({
        url: `/todos/${todoId}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Todos'],
      // при мутации обращаемся в тег  'Todos' чтобы обновить кеш и оно перерисовало все
    }),
  }),
});

export const {
  useFetchTodosQuery,
  useCreateTodosMutation,
  useDeleteTodosMutation,
} = todosApi;

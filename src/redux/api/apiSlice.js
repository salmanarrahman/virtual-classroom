import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "https://v-class.vercel.app" }),
  endpoints: (builder) => ({
    createCourse: builder.mutation({
      query: ({ data }) => ({
        url: `/create-course`,
        method: "POST",
        body: data,
      }),
    }),
    deleteCourse: builder.mutation({
      query: ({ id }) => ({
        url: `/delete-course`,
        method: "POST",
        body: id,
      }),
    }),
    createMaterial: builder.mutation({
      query: ({ data }) => ({
        url: `/create-materials`,
        method: "POST",
        body: data,
      }),
    }),
    getAllMaterial: builder.query({
      query: () => "/get-materials",
    }),
    getExam: builder.query({
      query: () => "/get-exam",
    }),
    getAssignment: builder.query({
      query: () => "/get-assignment",
    }),
    createExam: builder.mutation({
      query: ({ data }) => ({
        url: `/create-exam`,
        method: "POST",
        body: data,
      }),
    }),
    createAssignment: builder.mutation({
      query: ({ data }) => ({
        url: `/create-assignment`,
        method: "POST",
        body: data,
      }),
    }),
    deleteAssignment: builder.mutation({
      query: ({ data }) => ({
        url: `/delete-assignment`,
        method: "POST",
        body: data,
      }),
    }),
    deleteExam: builder.mutation({
      query: ({ data }) => ({
        url: `/delete-exam`,
        method: "POST",
        body: data,
      }),
    }),
    createGrade: builder.mutation({
      query: ({ data }) => ({
        url: `/set-grade`,
        method: "POST",
        body: data,
      }),
    }),
    addedCourse: builder.mutation({
      query: ({ data }) => ({
        url: `/added-course`,
        method: "POST",
        body: data,
      }),
    }),
    showAddedCourse: builder.query({
      query: (email) => `/all-added-course/${email}`,
    }),
    getGrade: builder.query({
      query: (email) => `/get-grade/${email}`,
    }),
    allCourse: builder.query({
      query: () => "/all-course",
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
  useShowAddedCourseQuery,
  useAddedCourseMutation,
  useGetGradeQuery,
  useDeleteExamMutation,
  useDeleteAssignmentMutation,
  useGetExamQuery,
  useGetAssignmentQuery,
  useGetAllMaterialQuery,
  useDeleteCourseMutation,
  useCreateGradeMutation,
  useCreateAssignmentMutation,
  useCreateExamMutation,
  useCreateMaterialMutation,
  useCreateCourseMutation,
  useAllCourseQuery,
} = api;

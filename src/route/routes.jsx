import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Login from "../Components/Login";
import Signup from "../Components/Signup";

import NotFound from "../layouts/NotFound";
import Home from "../Components/Home";
import CreateCourse from "../Components/CreateCourse";
import CourseMaterial from "../Components/CourseMaterial";
import Exam from "../Components/Exam";
import CreateAssignment from "../Components/CreateAssignment";
import GradeModifier from "../Components/GradeModifier";
import AddCourse from "../Components/AddCourse";
import MyMaterial from "../Components/MyMaterial";
import MyExam from "../Components/MyExam";
import MyAssignment from "../Components/MyAssignment";
import MyGrade from "../Components/MyGrade";
import PrivateRoute from "./PrivateRoute";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        index: true,
        element: <Home></Home>,
      },
      {
        path: "/create-course",
        element: <PrivateRoute> <CreateCourse></CreateCourse></PrivateRoute>
      },
      {
        path: "/material",
        element: <PrivateRoute><CourseMaterial></CourseMaterial></PrivateRoute>
      },
      {
        path: "/create-exam",
        element: <PrivateRoute><Exam></Exam></PrivateRoute>
      },
      {
        path: "/create-assignment",
        element: <PrivateRoute> <CreateAssignment></CreateAssignment></PrivateRoute>
      },
      {
        path: "/grade",
        element: <PrivateRoute><GradeModifier /></PrivateRoute>
      },
      {
        path: "/add-course",
        element: <PrivateRoute><AddCourse></AddCourse></PrivateRoute>
      },
      {
        path: "/my-material",
        element: <PrivateRoute><MyMaterial></MyMaterial></PrivateRoute>
      },
      {
        path: "/my-exam",
        element: <PrivateRoute><MyExam></MyExam></PrivateRoute>
      },
      {
        path: "/my-assignment",
        element: <PrivateRoute><MyAssignment></MyAssignment></PrivateRoute>
      },
      {
        path: "/my-grade",
        element: <PrivateRoute><MyGrade></MyGrade></PrivateRoute>
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup></Signup>
  },
  {
    path: "*",
    element: <NotFound></NotFound>
  },
]);

export default routes;

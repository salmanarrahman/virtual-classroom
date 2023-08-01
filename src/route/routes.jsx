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
        element: <CreateCourse></CreateCourse>
      },
      {
        path: "/material",
        element: <CourseMaterial></CourseMaterial>
      },
      {
        path: "/create-exam",
        element: <Exam></Exam>
      },
      {
        path: "/create-assignment",
        element: <CreateAssignment></CreateAssignment>
      },
      {
        path: "/grade",
        element: <GradeModifier />,
      },
      {
        path: "/add-course",
        element: <AddCourse></AddCourse>
      },
      {
        path: "/my-material",
        element: <MyMaterial></MyMaterial>
      },
      {
        path: "/my-exam",
        element: <MyExam></MyExam>
      },
      {
        path: "/my-assignment",
        element: <MyAssignment></MyAssignment>
      },
      {
        path: "/my-grade",
        element: <MyGrade></MyGrade>
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

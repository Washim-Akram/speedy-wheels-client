import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import AddAToy from "../pages/AddAToy/AddAToy";
import AllToys from "../pages/AllToys/AllToys";
import Blogs from "../pages/Blogs/Blogs";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import MyToys from "../pages/MyToys/MyToys";
import Register from "../pages/Register/Register";
import UpdateToy from "../pages/UpdateToy/UpdateToy";
import ViewDetails from "../pages/ViewDetails/ViewDetails";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/all-toys",
        element: <AllToys></AllToys>,
        loader: () =>
          fetch("https://speedy-wheels-server-three.vercel.app/cars"),
      },
      {
        path: "/my-toys",
        element: (
          <PrivateRoute>
            <MyToys></MyToys>
          </PrivateRoute>
        ),
      },
      {
        path: "/car/:id",
        element: (
          <PrivateRoute>
            <ViewDetails></ViewDetails>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://speedy-wheels-server-three.vercel.app/car/${params.id}`
          ),
      },
      {
        path: "/update/:id",
        element: <UpdateToy></UpdateToy>,
        loader: ({ params }) =>
          fetch(
            `https://speedy-wheels-server-three.vercel.app/car/${params.id}`
          ),
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/add-a-toy",
        element: (
          <PrivateRoute>
            <AddAToy></AddAToy>
          </PrivateRoute>
        ),
      },
      {
        path: "/blogs",
        element: <Blogs></Blogs>,
      },
    ],
  },
]);
export default router;

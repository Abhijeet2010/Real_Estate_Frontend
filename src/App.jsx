import React from "react";
import "./layout.scss";
import "./Pages/content.scss";

import HomePage from "./Pages/homepage/HomePage";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import { Layout, ProtectedRoutes } from "./Pages/layout/Layout";
import ListPage from "./Pages/listpage/ListPage";
import SinglePage from "./Pages/singlepage/SinglePage";
import ProfilePage from "./Pages/profilepage/ProfilePage";
import Login from "./Pages/login/Login";
import Register from "./Pages/register/Register";
import UpdateUserPage from "./Pages/updateUserPage/UpdateUserPage";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <HomePage />,
        },
        {
          path: "/list",
          element: <ListPage />,
        },
        {
          path: "/property/:id",
          element: <SinglePage />,
        },
        {
          path: "/profile",
          element: (
            <ProtectedRoutes>
              <ProfilePage /> ,
            </ProtectedRoutes>
          ),
        },

        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/register",
          element: <Register />,
        },

        {
          path: "/update/:id",
          element: (
            <ProtectedRoutes>
              <UpdateUserPage />
            </ProtectedRoutes>
          ),
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;

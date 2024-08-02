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
import Layout from "./Pages/layout/Layout";
import ListPage from "./Pages/listpage/ListPage";
import SinglePage from "./Pages/singlepage/SinglePage";
import ProfilePage from "./Pages/profilepage/ProfilePage";
import Login from "./Pages/login/Login";
import Register from "./Pages/register/Register";

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
          element: <ProfilePage />,
        },

        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/register",
          element: <Register />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;

import React from "react";
import TopBar from "./../component/TopBar";
import Dashboard from "../component/Dashboard";
import Create from "../component/Create";
import View from "../component/View";
import { Navigate } from "react-router-dom";

const AppRoutes = [
  {
    path: "/",
    element: (
      <>
        <TopBar />
        <Dashboard />
      </>
    ),
  },

  {
    path: "/create",
    element: (
      <>
        <TopBar />
        <Create />
      </>
    ),
  },

  {
    path: "/view/:id",
    element: (
      <>
        <TopBar />
        <View />
      </>
    ),
  },
  {
    path: '/*',
    element: (
        <Navigate to ="/"/>
    )
  }
];

export default AppRoutes;

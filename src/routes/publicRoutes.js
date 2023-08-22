import React from "react";

const registerScreen = React.lazy(() => import("../pages/register"));

const publicRoutes = [
  {
    path: "/",
    component: registerScreen,
  },
];

export default publicRoutes;

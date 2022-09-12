import { Navigate, useRoutes } from "react-router-dom";

import Home from "./pages/Home";
import Introduction from "./pages/Introduction";

export default function Router() {
  return useRoutes([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/gioi-thieu",
      element: <Introduction />,
    },
    { path: "*", element: <Navigate to="/404" replace /> },
  ]);
}

import { Navigate, useRoutes } from "react-router-dom";

import Home from "./pages/Home";
import Introduction from "./pages/Introduction";
import Contact from "./pages/Contact";
import RedeemPoints from "./pages/RedeemPoints";
import PoinAddress from "./pages/PointAddress";
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
    {
      path: "/lien-he",
      element: <Contact />,
    },
    {
      path: "/cach-thuc-doi-diem",
      element: < RedeemPoints />,
    },
    {
      path: "/dia-diem-doi-diem",
      element: < PoinAddress />,
    },
    {
      path: "/doi-diem",
      element: < PoinAddress />,
    },
    {
      path: "/san-pham",
      element: < PoinAddress />,
    },
    { path: "*", element: <Navigate to="/404" replace /> },
  ]);
}

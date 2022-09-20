import { Navigate, useRoutes } from "react-router-dom";

import Home from "./pages/Home";
import Introduction from "./pages/Introduction";
import Contact from "./pages/Contact";
import RedeemPoints from "./pages/RedeemPoints";
import PoinAddress from "./pages/PointAddress";
import Login from "./pages/Login";
import ExchangePoint from "./pages/ExchangePoint";
import Product from "./pages/Product";
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
      path: "/doi-diem",
      element: <ExchangePoint />
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
      path: "/dang-nhap",
      element: <Login />
    },
   
    {
      path: "/san-pham",
      element: <Product />
    },
    { path: "*", element: <Navigate to="/404" replace /> },
  ]);
}

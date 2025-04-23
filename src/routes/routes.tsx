// src/routes/routes.tsx
import { createBrowserRouter } from "react-router-dom";
import LayoutWrapper from "../components/Layout/LayoutWrapper";
import DashboardPage from "../pages/dashboard/Dashboard";
import LoginPage from "../pages/auth/Login";
import ErrorPage from "../pages/Error/errorPage";

const router = createBrowserRouter([
  {
    path: "/login", 
    element: <LoginPage />,
  },
  {
    path: "/error", 
    element: <ErrorPage />,
  },
  {
    path: "/",
    element: <LayoutWrapper />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <DashboardPage /> },
    ],
  },
]);

export default router;

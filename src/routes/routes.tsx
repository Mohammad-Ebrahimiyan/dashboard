// src/routes/routes.tsx
import { createBrowserRouter } from "react-router-dom";
import LayoutWrapper from "../components/Layout/LayoutWrapper";
import DashboardPage from "../pages/dashboard/Dashboard";
import SignUp from "../pages/auth/SignUp";
import ErrorPage from "../pages/error/errorPage";
import UserList from "../components/UI/UserList";
import Login from "../pages/auth/Login";
import HomePage from '../pages/home/HomePage'

const router = createBrowserRouter([
  {
    path: "/signup", 
    element: <SignUp />,
  },
  {
    path: "/login", 
    element: <Login />,
  },
  {
    path: "/error", 
    element: <ErrorPage />,
  },
{
  path:'users',
  element:<UserList />
},
{
  path:'homePage',
  element:<HomePage />
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

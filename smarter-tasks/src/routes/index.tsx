

import AccountLayout from "../layouts/account"
import ProtectedRoute from "../ProtectedRoute"
// authentication setup
import Signin from "../pages/signin"
import Signup from "../pages/signup"
// projects and members
import Projects from "../pages/projects"
import Members from "../pages/members"
import Logout from "../pages/logout";

import { createBrowserRouter, Navigate } from "react-router-dom";

const router = createBrowserRouter([
  { path: "/", element: <Navigate to="/account/projects" replace /> },
  {
    path: "/signin", 
    element: <Signin />
  },
  {
    path: "/signup", 
    element: <Signup />
  },
  
  { 
    path: "/logout", 
    element : <Logout /> 
  },
  // Protected Routes
  {
    path: "account",
    element: (
      <ProtectedRoute>
        <AccountLayout />
      </ProtectedRoute>
    ),
    children: [
      { index: true, element: <Navigate to="/account/projects" replace /> },
      {
        path: "projects",
        element: (<Projects />)
      },
      {
        path: "members",
        element: (<Members />)
      },
    ],
  },
]);

export default router;
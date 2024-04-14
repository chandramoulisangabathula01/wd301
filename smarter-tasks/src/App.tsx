// import { useState } from 'react';
// import {
//   createBrowserRouter,
//   Navigate,
//   RouterProvider,
//   Routes,
// } from "react-router-dom";
// import HomePage from "./pages/HomePage";
// import TaskListPage from "./pages/TaskListPage";
// import TaskDetailsPage from "./pages/TaskDetailsPage";
// import Signin from "./pages/Signin";
// import ProtectedRoute from "./ProtectedRoute";
// import Layout from "./Layout";
// import Notfound from "./pages/Notfound";
// import Form from './Form';
// import Header from "./components/Header";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Navigate to="/signin" replace />,
//   },
//   {
//     path:"*",
//     element: <Navigate to="/notfound" replace />
//   },
//   {
//     path: "/signin",
//     element: <Signin />,
//   },
//   {
//     path: "/notfound",
//     element: <Notfound/>
//   },
  
//   {
//     element: (
//       <ProtectedRoute>
//         <Layout />
//       </ProtectedRoute>
//     ),
//     children: [
//       {
//         path: "/home",
//         element: <HomePage />,
//       },
//       {
//         path: "/tasks",
//         element: <TaskListPage />,
//       },
//       {
//         path: "/tasks/:id",
//         element: <TaskDetailsPage />,
//       },
//     ],
//   },
// ]);

// function App() {
//   const [isHeaderVisible] = useState(true); // Assuming it's initially visible

//   return (
//     <div>
//       {isHeaderVisible && <Header />}
//       <Form />
//       <RouterProvider router={router} />
//       <Routes>
//         {/* Define your routes here */}
//       </Routes>
//     </div>
//   );
// }

// export default App;

// import {
//   createBrowserRouter,
//   RouterProvider,
// } from "react-router-dom";
// import Notfound from "./pages/Notfound";
// import Signup from './pages/signup';
// import Signin from "./pages/Signin";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Signup />,
//   },
//   {
//     path: "/signup",
//     element: <Signup />,
//   },
//   {
//     path: "/signin", // then we've added the signin route
//     element: <Signin />,
//   },
//   {
//     path: "/notfound",
//     element: <Notfound />,
//   },
//   {
//     path: "*",
//     element: <Notfound />,
//   }
// ]);

// const App = () => {
//   return (
//     <RouterProvider router={router} />
//   );
// }

// export default App


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Notfound from "./pages/Notfound";
import Signup from './pages/signup';
import Signin from './pages/signin';
import Dashboard from "./pages/dashboard";
import ProtectedRoute from "./ProtectedRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Signup />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/signin",
    element: <Signin />,
  },
  {
    path: "/notfound",
    element: <Notfound />,
  },
  {
    path: "/dashboard",
    element: (
      <ProtectedRoute>
        <Dashboard />
      </ProtectedRoute>
    ),
  },
  {
    path: "*",
    element: <Notfound />,
  }
]);

const App = () => {
  return (
    <RouterProvider router={router} />
  );
}

export default App
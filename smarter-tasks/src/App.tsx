// import {
//   createBrowserRouter,
//   RouterProvider,
// } from "react-router-dom";
// import Notfound from "./pages/Notfound";
// import Signup from './pages/signup';
// import Signin from './pages/signin';
// import Dashboard from "./pages/dashboard";
// import ProtectedRoute from "./ProtectedRoute";

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
//     path: "/signin",
//     element: <Signin />,
//   },
//   {
//     path: "/notfound",
//     element: <Notfound />,
//   },
//   {
//     path: "/dashboard",
//     element: (
//       <ProtectedRoute>
//         <Dashboard />
//       </ProtectedRoute>
//     ),
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


// import React, { useContext } from "react";

// import { RouterProvider } from "react-router-dom";
// import router from "./routes"
// import { ThemeContext } from "./context/theme";

// const App = () => {
//   const { theme } = useContext(ThemeContext)
//   return (
//     <div className={`h-screen w-full mx-auto py-2 ${theme === "dark" ? "dark" : ""}`}>
//       {theme}
//       <RouterProvider router={router} />
//     </div>
//   );
// }
// export default App;

import { Suspense, useContext } from "react";
import { RouterProvider } from "react-router-dom";
import "./App.css";
import router from "./routes"
// To do that, first I'll import the `ProjectsProvider` in the `App` component.
import { ThemeContext } from "./context/theme";
import { ProjectsProvider } from "./context/projects/context";
import { MembersProvider } from "./context/members/context";
import { CommentProvider } from "./context/comment/context";

// Then I'll wrap the RouterProvider component with the <ProjectsProvider> component.
const App = () => {
  const { theme } = useContext(ThemeContext)
  return (
    <div className={`h-screen w-full mx-auto py-3 ${theme === "dark" ? "dark" : ""}`}>
      <CommentProvider>
        <ProjectsProvider>
          <MembersProvider>
            <Suspense fallback={<>Loading...</>}>
              <RouterProvider router={router} />
            </Suspense>
          </MembersProvider>
        </ProjectsProvider>
      </CommentProvider>
    </div>
  );
}
export default App;
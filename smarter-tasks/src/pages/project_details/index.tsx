
import React, { Suspense } from "react";
const ProjectDetails = React.lazy(() => import("./ProjectDetails"));
import { TasksProvider } from "../../context/task/context";
import ErrorBoundary from "../../components/ErrorBoundary";

// import ProjectDetails from "./ProjectDetails";

import { Outlet } from "react-router-dom";

const ProjectDetailsIndex: React.FC = () => {
    return (
      <TasksProvider>
        <ErrorBoundary>
        <Suspense fallback={<div className="suspense-loading">Loading...</div>}>
          <ProjectDetails />
        </Suspense>
      </ErrorBoundary>
        <Outlet />
      </TasksProvider>
    );
};
export default ProjectDetailsIndex;

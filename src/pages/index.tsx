import { lazy, Suspense } from "react";

import { Route, Routes } from "react-router-dom";

const TaskListPage = lazy(() => import("./todo-list"));
const TaskDetailPage = lazy(() => import("./todo-detail"));
const AboutPage = lazy(() => import("./about"));

export const Router = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Suspense fallback={<>...</>}>
            <TaskListPage />
          </Suspense>
        }
      />
      <Route
        path="/task-detail/:id"
        element={
          <Suspense fallback={<>...</>}>
            <TaskDetailPage />
          </Suspense>
        }
      />
      <Route
        path="/about"
        element={
          <Suspense fallback={<>...</>}>
            <AboutPage />
          </Suspense>
        }
      />
    </Routes>
  );
};

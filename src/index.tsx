import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import NotFound from "./pages/NotFound";
import IOSHome from "./pages/IOSHome";
import ProjectDetail from "./pages/ProjectDetail";
import CareerDetail from "./pages/CareerDetail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFound />,
    children: [
      { index: true, path: "/", element: <IOSHome /> },
      { path: "/project/:id", element: <ProjectDetail /> },
      { path: "/career/:id", element: <CareerDetail /> },
    ],
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

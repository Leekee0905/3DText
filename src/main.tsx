import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./pages/Home";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import GlobalStyles from "./styles/global";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <GlobalStyles />
    <RouterProvider router={router} />
  </React.StrictMode>
);

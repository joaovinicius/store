import React from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import About from "./pages/About";

export const router = createBrowserRouter([
  {
    path: "/",
    id: 'Home',
    element: <App />,
  },
  {
    path: "/about",
    id: 'About',
    element: <About />,
  },
]);
import React from "react";
import ReactDOM from "react-dom/client";

import Navbar from "./components/StyledNavBar/Navbar";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello world!</div>,
  },
  {
    path: "/about",
    element: <div>About!</div>,
  },
]);

const NavStyle = {
  bgColor: "#646cff",
  textColor: "#fff",
};

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Navbar style={NavStyle}></Navbar>
    <RouterProvider router={router} />
  </React.StrictMode>
);

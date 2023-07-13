import React from "react";
import ReactDOM from "react-dom/client";

import Navbar from "./components/StyledNavBar/Navbar";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ColourGame from "./pages/Colour";

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello world!</div>,
  },
  {
    path: "/about",
    element: <div>About!</div>,
  },
  {
    path: "/colour",
    element: <ColourGame />,
  },
]);

const NavStyle = {
  bgColor: "#20b2aa",
  textColor: "#fff",
};

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <link href="/dist/output.css" rel="stylesheet"></link>
    <Navbar style={NavStyle}></Navbar>
    <RouterProvider router={router} />
  </React.StrictMode>
);

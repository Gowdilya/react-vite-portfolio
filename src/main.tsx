import React from "react";
import ReactDOM from "react-dom/client";

import Navbar from "./components/StyledNavBar/Navbar";
// import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { createHashRouter, RouterProvider } from "react-router-dom";
import ColourGamePage from "./pages/Colour";
import ResumePage from "./pages/Resume";
import AboutPage from "./pages/About";
import "./input.css";

const router = createHashRouter([
  {
    path: "/",
    element: <AboutPage />,
  },
  {
    path: "/about",
    element: <AboutPage />,
  },
  {
    path: "/colour",
    element: <ColourGamePage />,
  },
  {
    path: "/resume",
    element: <ResumePage />,
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

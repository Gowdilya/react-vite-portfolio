import React from "react";
import ReactDOM from "react-dom/client";
// import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { createHashRouter, RouterProvider } from "react-router-dom";
import ColourGamePage from "./pages/Colour";
import ResumePage from "./pages/Resume";
import AboutPage from "./pages/About";
import Layout from "./components/Layout/layout";
import Project from "./components/Projects";
import Tnt from "./components/Projects/tnt";
import "./input.css";

const routes = [
  {
    path: "/",
    exact: true,
    element: (
      <Layout>
        <AboutPage />
      </Layout>
    ),
  },
  {
    path: "/about",
    exact: true,
    element: (
      <Layout>
        <AboutPage />
      </Layout>
    ),
  },
  {
    path: "/projects",
    exact: true,
    element: (
      <Layout>
        <Project />
      </Layout>
    ),
  },
  {
    path: "/tracking&traceability",
    exact: true,
    element: (
      <Layout>
        <Tnt />
      </Layout>
    ),
  },
  {
    path: "/colour",
    exact: true,
    element: (
      <Layout>
        <ColourGamePage />
      </Layout>
    ),
  },
  {
    path: "/resume",
    element: (
      <Layout>
        <ResumePage />
      </Layout>
    ),
  },
];
const Router = createHashRouter(routes);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <link href="/dist/output.css" rel="stylesheet"></link>
    <RouterProvider router={Router} />
  </React.StrictMode>
);

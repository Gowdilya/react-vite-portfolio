import React from "react";
import ReactDOM from "react-dom/client";
// import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
  createHashRouter,
  RouterProvider,
  ScrollRestoration,
} from "react-router-dom";
import ColourGamePage from "./pages/Colour";
import ResumePage from "./pages/Resume";
import AboutPage from "./pages/About";
import Layout from "./components/Layout/layout";
import Project from "./components/Projects";
import Tnt from "./components/Projects/tnt";
import STVTP from "./components/Projects/stvtp";
import ChatBot from "./components/Projects/Chat";

import "./input.css";
import TypeAhead from "./components/Projects/TypeAhead";

const routes = [
  {
    path: "/",
    exact: true,
    element: (
      <Layout>
        <ScrollRestoration />
        <AboutPage />
      </Layout>
    ),
  },
  {
    path: "/test",
    exact: true,
    element: (
      <Layout>
        <TypeAhead />
        <ScrollRestoration />
      </Layout>
    ),
  },
  {
    path: "/about",
    exact: true,
    element: (
      <Layout>
        <AboutPage />
        <ScrollRestoration />
      </Layout>
    ),
  },
  {
    path: "/projects",
    exact: true,
    element: (
      <Layout>
        <Project />
        <ScrollRestoration />
      </Layout>
    ),
  },
  {
    path: "/tracking&traceability",
    exact: true,
    element: (
      <Layout>
        <Tnt />
        <ScrollRestoration />
      </Layout>
    ),
  },
  {
    path: "/chatbot",
    exact: true,
    element: (
      <Layout>
        <ChatBot />
        <ScrollRestoration />
      </Layout>
    ),
  },
  {
    path: "/stvtp",
    exact: true,
    element: (
      <Layout>
        <STVTP />
        <ScrollRestoration />
      </Layout>
    ),
  },
  {
    path: "/colour",
    exact: true,
    element: (
      <Layout>
        <ColourGamePage />
        <ScrollRestoration />
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
    {/* <link href="/dist/output.css" rel="stylesheet"></link> */}
    <RouterProvider router={Router} />
  </React.StrictMode>
);

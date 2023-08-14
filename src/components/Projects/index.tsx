import React, { Component } from "react";
import Card from "./CardComponent";

export default function Project() {
  return (
    <div>
      {" "}
      <p className="container m-auto mt-6 text-center">
        {" "}
        Here are some projects I've worked on on my free time outside of my
        9-5(day job).{" "}
        <p>
          Some of these are projects I worked on for clients part-time, and some
          I built just for fun and learning.{" "}
        </p>
        <p>
          Click on the corresponding black card component to view the related
          project demo or screenshots.
        </p>
        <p>Github links to the code, and client website are posted below.</p>
      </p>
      <div className="container sm:flex m-auto mt-6 text-center">
        <div className="m-6">
          <Card
            projectName="Alchemy Colour Game(2023)"
            link="#/colour"
            description="A Colour combining game where you combine different hues & shades to get close to the target colour. Built using React & TypeScript, with the use of HashMap to keep track of all the colours."
          >
            <img src="images/col.png"></img>
          </Card>
          Complete Game Code:
          <a
            className="ml-2 mt-6 underline text-blue-600 hover:text-blue-800 visited:text-purple-600"
            href="https://github.com/Gowdilya/alchemy"
          >
            https://github.com/Gowdilya/alchemy
          </a>
        </div>
        <div className="m-6">
          <Card
            link="#/stvtp"
            projectName="CookTop Safety Demo App(2022)"
            description="
        A dashboard app to show case how building/condo managers might view and analyze metrics collected by Cook Top Safety's Smart Sensor technology. Allows you to view various metrics, and both building and unit level breakdown."
          >
            <img src="images/e.png"></img>
          </Card>
          <div>
            Client Company Website:
            <a
              className="ml-2 mt-6 underline text-blue-600 hover:text-blue-800 visited:text-purple-600"
              href="https://www.cooktopsafety.com/"
            >
              https://www.cooktopsafety.com/
            </a>
          </div>

          <div>
            Front-End Code:
            <a
              className="ml-2 mt-6 underline text-blue-600 hover:text-blue-800 visited:text-purple-600"
              href="https://github.com/Gowdilya/stvtp"
            >
              https://github.com/Gowdilya/stvtp
            </a>
          </div>
        </div>
        <div className="m-6">
          <Card
            link="#/tracking&traceability"
            projectName="Tracking & Traceability App(2021)"
            description="A product tracking and inventory Application that scans QR codes to track parts and products(sera4 bluetooth locks) in the manufacturing sector. I was the Front-End Architect who built the front-end client, working with a small team of engineers to build the whole application. This is a full stack application with a MicroService backend architecture."
          >
            <img src="images/2.jpg"></img>
          </Card>
          <div>
            Client Company Website:
            <a
              className="ml-2 mt-6 underline text-blue-600 hover:text-blue-800 visited:text-purple-600"
              href="https://sera4.com/"
            >
              https://sera4.com/
            </a>
          </div>
          <div>
            Front-End Code:
            <a
              className="ml-2 mt-6 underline text-blue-600 hover:text-blue-800 visited:text-purple-600"
              href="https://github.com/Gowdilya/tnt"
            >
              https://github.com/Gowdilya/tnt
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

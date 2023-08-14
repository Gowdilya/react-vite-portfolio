import React, { Component } from "react";
import Card from "./CardComponent";

export default function Project() {
  return (
    <div className="container flex m-auto mt-6">
      <div className="m-6">
        <Card
          projectName="Tracking & Traceability App"
          description="A product tracking and inventory Application that scans QR codes to track parts and products in the manufacturing sector."
        ></Card>
      </div>
      <div className="m-6">
        <Card
          projectName="Cook Top Safety Demo App"
          description="
        A dashboard app to show case how building/condo managers might view and analyze metrics collected by Cook Top Safety's Smart Sensor technology. Allows you to view various metrics, and both building and unit level breakdown."
        ></Card>
      </div>
    </div>
  );
}

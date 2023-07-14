import React, { Component } from "react";
import "./Resume.css";
import {resumeHTML} from './html';
//var __html = require("./html.js");
//var template = { __html: __html };

export default function Resume() {
  return (
    <div>
      <div className="screen-share">
        <span dangerouslySetInnerHTML={resumeHTML} />
      </div>
    </div>
  );
}

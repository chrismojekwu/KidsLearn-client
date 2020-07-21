import React from "react";
import ReactDOM from "react-dom";
import ProgressInstructions from "../Instructions/ProgressInstructions";
import WelcomeInstructions from "../Instructions/WelcomeInstructions";

it("renders Progress instructions component without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(ProgressInstructions, div);
  ReactDOM.unmountComponentAtNode(div);
});

it("renders Welcome instructions component without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(WelcomeInstructions, div);
  ReactDOM.unmountComponentAtNode(div);
});

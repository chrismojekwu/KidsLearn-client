import React from "react";
import ReactDOM from "react-dom";
import Doodle from "../Doodle/Doodle";
import Canvas from "../Doodle/Canvas";

it("renders Doodle component without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(Doodle, div);
  ReactDOM.unmountComponentAtNode(div);
});

it("renders Canvas component without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(Canvas, div);
  ReactDOM.unmountComponentAtNode(div);
});

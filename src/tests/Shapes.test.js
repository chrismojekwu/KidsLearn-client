import React from "react";
import ReactDOM from "react-dom";
import Shapes from "../Shapes/Shapes";

it("renders Shapes component without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(Shapes, div);
  ReactDOM.unmountComponentAtNode(div);
});

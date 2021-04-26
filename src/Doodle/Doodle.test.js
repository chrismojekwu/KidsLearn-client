import React from "react";
import ReactDOM from "react-dom";
import { render, screen } from '@testing-library/react';
import Doodle from "./Doodle";
import Canvas from "./Canvas";

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

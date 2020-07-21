import React from "react";
import ReactDOM from "react-dom";
import Letters from "../Letters/Letters";

it("renders Letters component without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(Letters, div);
  ReactDOM.unmountComponentAtNode(div);
});

import React from "react";
import ReactDOM from "react-dom";
import Objects from "../Objects/Objects";

it("renders Objects component without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(Objects, div);
  ReactDOM.unmountComponentAtNode(div);
});

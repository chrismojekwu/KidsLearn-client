import React from "react";
import ReactDOM from "react-dom";
import Doodle from "../Doodle/Doodle";

it("renders Doodle component without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(Doodle, div);
  ReactDOM.unmountComponentAtNode(div);
});

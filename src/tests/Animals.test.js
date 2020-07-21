import React from "react";
import ReactDOM from "react-dom";
import Animals from "../Animals/Animals";

it("renders Animals component without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(Animals, div);
  ReactDOM.unmountComponentAtNode(div);
});

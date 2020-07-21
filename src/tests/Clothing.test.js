import React from "react";
import ReactDOM from "react-dom";
import Clothing from "../Clothing/Clothing";

it("renders Clothing component without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(Clothing, div);
  ReactDOM.unmountComponentAtNode(div);
});

import React from "react";
import ReactDOM from "react-dom";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import Login from "../components/Login";
import Progress from "../components/Progress";
import ProgressForm from "../components/ProgressForm";
import Signup from "../components/Signup";
import ReportSharePage from "../components/ReportSharePage";
import WindowSize from "../components/WindowSize";
import DoodleColors from "../components/DoodleColors";

it("renders Footer component without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(Footer, div);
  ReactDOM.unmountComponentAtNode(div);
});

it("renders Nav component without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(Nav, div);
  ReactDOM.unmountComponentAtNode(div);
});

it("renders Login component without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(Login, div);
  ReactDOM.unmountComponentAtNode(div);
});

it("renders Progress component without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(Progress, div);
  ReactDOM.unmountComponentAtNode(div);
});

it("renders ProgressForm component without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(ProgressForm, div);
  ReactDOM.unmountComponentAtNode(div);
});

it("renders Signup component without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(Signup, div);
  ReactDOM.unmountComponentAtNode(div);
});

it("renders Report Share Page component without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(ReportSharePage, div);
  ReactDOM.unmountComponentAtNode(div);
});

it("renders Window size component without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(WindowSize, div);
  ReactDOM.unmountComponentAtNode(div);
});

it("renders Doodle Color Bar component without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(DoodleColors, div);
  ReactDOM.unmountComponentAtNode(div);
});

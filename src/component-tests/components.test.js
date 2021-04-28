import React from "react";
import { render, screen } from '@testing-library/react';
import Enzyme, {mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import Login from "../components/Login";
import Progress from "../components/Progress";
import ProgressForm from "../components/ProgressForm";
import Signup from "../components/Signup";
import ReportSharePage from "../components/ReportSharePage";
import WindowSize from "../components/WindowSize";
import DoodleColors from "../components/DoodleColors";

Enzyme.configure({ adapter: new Adapter() });

it("renders Footer component without crashing", () => {
  render(<Footer/>);
 
});

it("renders Nav component without crashing", () => {
  render(<Nav/>);
});

it("renders Login component without crashing", () => {
  render(<Login/>);
});

it("renders Progress component without crashing", () => {
  render(<Progress/>);
});

it("renders ProgressForm component without crashing", () => {
  render(<ProgressForm/>);
});

it("renders Signup component without crashing", () => {
  render(<Signup/>);
});

it("renders Report Share Page component without crashing", () => {
  const testRouterProps = {
    params: {
      rep_id: 1
    }
  };

  render(<ReportSharePage match={testRouterProps}/>);
});

it("renders Window size component without crashing", () => {
  render(<WindowSize/>);
});

it("renders Doodle Color Bar component without crashing", () => {
  render(<DoodleColors/>);
});

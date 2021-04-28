import React from "react";
import { getByTestId, render, screen } from '@testing-library/react';
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

it("renders Footer component and social icons", () => {
  render(<Footer/>);
  const imgs = screen.getAllByTestId("social-icons");
  expect(imgs.length).toBe(6);
});

it("renders Nav component and the appropriate amount of buttons", () => {
  render(<Nav/>);
  const buttons = screen.getAllByRole('button');
  expect(buttons.length).toBe(6);
});

it("renders Login component and appropriate elements", () => {
  render(<Login/>);
  const userName = screen.getByRole('textbox');
  expect(userName).toBeInTheDocument();

  const buttons = screen.getAllByRole('button');
  expect(buttons.length).toBe(2);
});

it("renders Progress component and appropriate elements", () => {
  render(<Progress/>);
  const progress = screen.getByTestId('progress-div');
  expect(progress).toBeInTheDocument();

  const scrollButtons = screen.getAllByRole('button');
  expect(scrollButtons.length).toBe(2);
});

it("renders ProgressForm and none user message when no auth token present", () => {
  render(<ProgressForm/>);
  expect(screen.getByTestId('nonuser-message')).toBeInTheDocument();
});

it("renders Signup component and appropriate elements", () => {
  render(<Signup/>);
  const signupButton = screen.getByRole('button');
  expect(signupButton).toBeInTheDocument();

  const inputs = screen.getAllByRole('textbox');
  expect(inputs.length).toBe(3);
});

it("renders Report Share Page and container div", () => {
  const testRouterProps = {
    params: {
      rep_id: 1
    }
  };
  render(<ReportSharePage match={testRouterProps}/>);
  expect(screen.getByTestId('sharereport-div')).toBeInTheDocument();
});


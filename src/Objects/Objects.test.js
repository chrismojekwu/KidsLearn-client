import React from "react";
import { render, screen } from '@testing-library/react';
import Enzyme, {mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Objects from "./Objects";

it("renders Objects component without crashing", () => {
  render(<Objects/>);
  screen.debug();
});

it("renders all of the icons", () => {
  render(<Objects/>);
  const icons = screen.getAllByTestId("icons");
  expect(icons.length).toBe(25);
});


import React from "react";
import { render, screen } from '@testing-library/react';
import Enzyme, {mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Shapes from "./Shapes";

Enzyme.configure({ adapter: new Adapter() });

it("renders Shapes component without crashing", () => {
  render(<Shapes/>);
});

it("renders the display and select elements", () => {
  render(<Shapes/>);

  const display = screen.getAllByRole('generic')[2];
  expect(display).toBeInTheDocument();

  const options = screen.getAllByRole('option');
  expect(options.length).toBe(19);
});
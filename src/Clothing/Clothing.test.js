import React from "react";
import { render, screen } from '@testing-library/react';
import Clothing from "./Clothing";

it("renders Clothing component without crashing", () => {
  render(<Clothing/>);
});

it('renders all the images and inputs for the test', () => {
  render(<Clothing/>);
  const images = screen.getAllByRole('img');
  const inputs = screen.getAllByRole('textbox');
  expect(images.length).toBe(10);
  expect(inputs.length).toBe(10);
});

import React from "react";
import { render, screen } from '@testing-library/react';
import Animals from "./Animals";

it("renders Animals component without crashing", () => {
  render(<Animals/>);
});

it("renders the animal display and appropriate options", () => {
  render(<Animals/>);

  const display = screen.getByTestId('animal-display');
  expect(display).toBeInTheDocument();

  const animals = screen.getAllByRole('option')
  expect(animals.length).toBe(22);
})
import React from "react";
import { render, screen } from '@testing-library/react';
import ProgressInstructions from "./ProgressInstructions";
import WelcomeInstructions from "./WelcomeInstructions";

it("renders Progress instructions component without crashing", () => {
  render(<ProgressInstructions/>);
  const instrucDiv = screen.getByTestId('instruction-div');
  expect(instrucDiv).toBeInTheDocument();
});

it("renders Welcome instructions component without crashing", () => {
  render(<WelcomeInstructions/>);
  const instrucDiv = screen.getByTestId('instruction-div');
  expect(instrucDiv).toBeInTheDocument();
});

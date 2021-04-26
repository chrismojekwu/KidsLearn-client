import React from "react";
import { render, screen } from '@testing-library/react';
import {BrowserRouter} from 'react-router-dom';
import App from "./App";

it("renders App without crashing", () => {
  render(
    <BrowserRouter>
       <App/>
    </BrowserRouter>
  );
});

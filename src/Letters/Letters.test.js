import React from "react";
import { render, screen } from '@testing-library/react';
import Enzyme, {mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Letters from "./Letters";

Enzyme.configure({ adapter: new Adapter() });

it("renders Letters component without crashing", () => {
  render(<Letters/>);
});

it("alters the displayed text when input is changed", () => {
  const wrapper = mount(<Letters/>);
  const textInput = wrapper.find('input');
  textInput.simulate('change', { target: { value: "TEST TEST"}});

  expect(wrapper.find('div').at(2).text()).toBe("TEST TEST");
});

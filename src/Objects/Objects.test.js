import React from "react";
import { render, screen } from '@testing-library/react';
import Enzyme, {mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Objects from "./Objects";

Enzyme.configure({ adapter: new Adapter() });

it("renders Objects component without crashing", () => {
  render(<Objects/>);
});

it("renders all of the icons", () => {
  render(<Objects/>);
  const icons = screen.getAllByTestId("icons");
  expect(icons.length).toBe(25);
});

it("changes the display when an icon is clicked", () => {
  const wrapper = mount(<Objects/>);
  const displayDiv = wrapper.find('#objectlarge');
  const testIcon = wrapper.find('.fa-couch');
  testIcon.simulate('click');
  expect(displayDiv.hasClass('fa-couch'));

  const testIcon2 = wrapper.find('.fa-bicycle');
  testIcon2.simulate('click');
  expect(displayDiv.hasClass('fa-bicycle'));
});

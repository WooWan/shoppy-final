import renderer from "react-test-renderer";
import React from "react";
import Navbar from "../navbar";
describe("Navbar", () => {
  it("navbar render", () => {
    const component = renderer.create(<Navbar />);
    expect(component.toJSON()).toMatchSnapshot();
  });
});

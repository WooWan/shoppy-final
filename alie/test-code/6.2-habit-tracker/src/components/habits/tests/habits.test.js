import renderer from "react-test-renderer";
import React from "react";
import Habits from "../habits";
describe("Habits component", () => {
  const habits = [
    { name: "sterling", count: 1, id: 1 },
    { name: "erling holland", count: 3, id: 2 },
  ];

  let HabitsComponent;
  let onIncrement;
  let onDecrement;
  let onDelete;
  let onAdd;
  let onReset;

  beforeEach(() => {
    onIncrement = jest.fn();
    onDecrement = jest.fn();
    onDelete = jest.fn();
    onAdd = jest.fn();
    onReset = jest.fn();
    HabitsComponent = (
      <Habits
        habits={habits}
        onIncrement={onIncrement}
        onDecrement={onDecrement}
        onDelete={onDelete}
        onAdd={onAdd}
        onReset={onReset}
      />
    );
  });

  it("render", () => {
    const component = renderer.create(HabitsComponent);
    expect(component.toJSON).toMatchSnapshot();
  });
});

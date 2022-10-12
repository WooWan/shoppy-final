import { render, screen } from "@testing-library/react";
import Habit from "../habit";
import React from "react";
import userEvent from "@testing-library/user-event";
import renderer from "react-test-renderer";

describe("habit", () => {
  let onIncrement;
  let onDecrement;
  let onDelete;
  let HabitComponent;
  const habit = { name: "foo", count: 0 };
  beforeEach(() => {
    onIncrement = jest.fn();
    onDecrement = jest.fn();
    onDelete = jest.fn();
    HabitComponent = (
      <Habit
        onDecrement={onDecrement}
        onDelete={onDelete}
        onIncrement={onIncrement}
        habit={habit}
      />
    );
  });

  it("habit component renderer", () => {
    const component = renderer.create(HabitComponent);
    expect(component.toJSON()).toMatchSnapshot();
  });

  describe("button click", () => {
    let incrementButton;
    let decrementButton;
    let deleteButton;
    beforeEach(() => {
      render(HabitComponent);
    });

    it("increment button click", () => {
      incrementButton = screen.getByTitle("increment");
      userEvent.click(incrementButton);
      expect(onIncrement).toHaveBeenCalledTimes(1);
    });

    it("decrement button click", () => {
      decrementButton = screen.getByTitle("decrement");
      userEvent.click(decrementButton);
      expect(onDecrement).toHaveBeenCalledTimes(1);
    });

    it("delete button click", () => {
      deleteButton = screen.getByTitle("delete");
      userEvent.click(deleteButton);
      expect(onDelete).toHaveBeenCalledTimes(1);
    });
  });
});

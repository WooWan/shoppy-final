import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import HabitAddForm from "../habitAddForm";
import React from "react";

describe("HabitAddForm", () => {
  let onAdd;
  beforeEach(() => {
    onAdd = jest.fn();
    render(<HabitAddForm onAdd={onAdd} />);
  });

  it("onAdd 호출", () => {
    const input = screen.getByPlaceholderText("Habit");
    const button = screen.getByText("Add");

    userEvent.type(input, "Habit");
    userEvent.click(button);

    expect(onAdd).toHaveBeenCalledTimes(1);
  });
});

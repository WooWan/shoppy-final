import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import HabitAddForm from "../habitAddForm";
import React from "react";
import renderer from "react-test-renderer";

describe("habit add form", () => {
  it("renders", () => {
    //renderer를 이용한 snapshot test
    const component = renderer.create(<HabitAddForm onAdd={jest.fn()} />);
    expect(component.toJSON()).toMatchSnapshot();
  });
  describe("Form Submit", () => {
    let onAdd;
    let input;
    let button;
    beforeEach(() => {
      onAdd = jest.fn();
      render(<HabitAddForm onAdd={onAdd} />);
      input = screen.getByPlaceholderText("Habit");
      button = screen.getByText("Add");
    });

    it("버튼을 클릭하였을 때, onAdd가 호출된다.", () => {
      //input에 habit을 입력한다.
      userEvent.type(input, "habit");
      userEvent.click(button);
      expect(onAdd).toBeCalledWith("habit");
    });

    it("name이 없으면 버튼을 클릭하였을 때, onAdd가 호출되지 않는다.", () => {
      userEvent.type(input, "");
      userEvent.click(button);
      expect(onAdd).toHaveBeenCalledTimes(0);
    });
  });
});

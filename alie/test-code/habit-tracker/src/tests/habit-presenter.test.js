import HabitPresenter from "../habit_presenter";

describe("HabitPresenter", () => {
  const habits = [
    { id: 1, name: "habit1", count: 1 },
    { id: 2, name: "habit2", count: 0 },
  ];
  let presenter;
  let update;

  beforeEach(() => {
    presenter = new HabitPresenter(habits, 3);
    update = jest.fn();
  });

  it("habits 초기화", () => {
    expect(presenter.getHabits()).toEqual(habits);
  });

  it("increment habit count and call update callback", () => {
    presenter.increment(habits[0], update);
    expect(presenter.getHabits()[0].count).toBe(2);
    checkUpdateIsCalled();
  });

  it("decrement 호출, callback", () => {
    presenter.decrement(habits[0], update);
    expect(presenter.getHabits()[0].count).toBe(0);
    checkUpdateIsCalled();
  });

  it("decrement를 해도 0보다 작아지지 않는다.", () => {
    presenter.decrement(habits[1], update);
    presenter.decrement(habits[1], update);
    expect(presenter.getHabits()[1].count).toBe(0);
  });

  it("habits을 삭제하고 개수를 확인한다.", () => {
    presenter.deleteHabit(habits[0], update);
    expect(presenter.getHabits().length).toBe(1);
  });

  it("habits을 추가하고 개수를 확인한다.", () => {
    const newHabit = { id: 3, name: "habit3", count: 0 };
    presenter.addHabit(newHabit, update);
    expect(presenter.getHabits().length).toBe(3);
    expect(presenter.getHabits()[2]).toEqual(newHabit);
  });

  it("habit의 최대개수는 3개이다.", () => {
    const newHabit = { id: 3, name: "habit3", count: 0 };
    const newHabit2 = { id: 4, name: "habit4", count: 0 };
    presenter.addHabit(newHabit, update);

    expect(() => presenter.addHabit(newHabit2, update)).toThrow(
      `습관의 최대 개수는 3개 입니다.`
    );
    expect(presenter.getHabits().length).toBe(3);
  });

  describe("resetHabit", () => {
    it("habits을 초기화하고 개수를 확인한다.", () => {
      presenter.resetHabit(update);
      expect(presenter.getHabits()[0].count).toBe(0);
    });

    it("value 값이 0이 아닌 경우에만 resetHabit이 호출된다.", () => {
      const habits = presenter.getHabits();
      presenter.resetHabit(update);
      expect(presenter.getHabits()[1]).toBe(habits[1]);
    });
  });

  function checkUpdateIsCalled() {
    expect(update).toHaveBeenCalledTimes(1);
    expect(update).toHaveBeenCalledWith(presenter.getHabits());
  }
});

export default class HabitPresenter {
  // maxHabits을 외부에서 받아와서 사용할 수 있도록 한다.
  // test code를 작성할 때, 임의의 값을 넣어서 테스트할 수 있다.
  // ex) max habits = 100 을 설정하면 테스트할 때 100개의 habit을 만들어야 함.
  constructor(habits, maxHabits) {
    this.habits = habits;
    this.maxHabits = maxHabits;
  }

  getHabits() {
    return this.habits;
  }

  increment(habit, update) {
    this.habits = this.habits.map((item) => {
      if (item.id === habit.id) {
        return { ...habit, count: habit.count + 1 };
      }
      return item;
    });
    update(this.habits);
  }

  decrement(habit, update) {
    this.habits = this.habits.map((item) => {
      if (item.id === habit.id) {
        const count = item.count - 1;
        return { ...habit, count: count < 0 ? 0 : count };
      }
      return item;
    });
    update(this.habits);
  }

  addHabit(habit, update) {
    if (this.habits.length === this.maxHabits) {
      throw new Error(`습관의 최대 개수는 ${this.maxHabits}개 입니다.`);
    }
    this.habits = [...this.habits, habit];
    update(this.habits);
  }

  deleteHabit(habit, update) {
    this.habits = this.habits.filter((item) => item.id !== habit.id);
    update(this.habits);
  }
  resetHabit(update) {
    this.habits = this.habits.map((habit) => {
      if (habit.count !== 0) {
        return { ...habit, count: 0 };
      }
      return habit;
    });
    update(this.habits);
  }
}

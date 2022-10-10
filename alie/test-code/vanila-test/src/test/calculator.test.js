const Calculator = require("../calculator");

//describe는 테스트를 그룹화하는 역할을 한다.
describe("Calculator", () => {
  //beforeEach는 각각의 테스트가 실행되기 전에 실행되는 함수이다.
  //각 테스트는 독립적으로 실행되어야 한다.
  beforeEach(() => {
    calc = new Calculator();
  });

  it("inits with 0", () => {
    expect(calc.value).toBe(0);
  });

  it("sets", () => {
    calc.set(10);
    expect(calc.value).toBe(10);
  });

  it("clears", () => {
    calc.set(10);
    calc.clear();
    expect(calc.value).toBe(0);
  });

  describe("add", () => {
    it("adds", () => {
      calc.set(10);
      calc.add(5);
      expect(calc.value).toBe(15);
    });

    it("throws error if value is greater than 100", () => {
      calc.set(100);
      expect(() => calc.add(1)).toThrow("Value can not be greater than 100");
    });
  });

  it("subtracts", () => {
    calc.set(10);
    calc.subtract(5);
    expect(calc.value).toBe(5);
  });

  it("multiplies", () => {
    calc.set(10);
    calc.multiply(5);
    expect(calc.value).toBe(50);
  });

  describe("divide", () => {
    it("divides", () => {
      calc.set(10);
      calc.divide(5);
      expect(calc.value).toBe(2);
    });

    it("throws error when divided by 0", () => {
      calc.set(1);
      calc.divide(0);
      expect(calc.value).toBe(Infinity);
    });
  });
});

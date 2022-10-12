const check = require("../check.js");

describe("check", () => {
  let onSuccess;
  let onFail;

  beforeEach(() => {
    onSuccess = jest.fn();
    onFail = jest.fn();
  });

  //1. check 함수는 predicate가 true일 때 onSuccess 함수를 호출한다.
  it("성공시 onSuccess 함수가 호출된다.", () => {
    check(() => true, onSuccess, onFail);
    expect(onSuccess.mock.calls.length).toBe(1);
    expect(onFail.mock.calls.length).toBe(0);
  });

  //2. 개선 버전: toHaveBeenCalled 함수를 이용한 check 함수 검증
  it("성공시 onSuccess 함수가 호출된다.", () => {
    check(() => true, onSuccess, onFail);
    expect(onSuccess).toHaveBeenCalledTimes(1);
    expect(onFail).not.toHaveBeenCalled();
    expect(onSuccess).toHaveBeenCalledWith("yes");
    // expect(onSuccess).toHaveBeenCalledWith("yes");
  });

  it("should call onSuccess when predicate is true", () => {
    check(() => true, onSuccess, onFail);

    // expect(onSuccess.mock.calls.length).toBe(1);
    expect(onSuccess).toHaveBeenCalledTimes(1);
    // expect(onSuccess.mock.calls[0][0]).toBe('yes');
    expect(onSuccess).toHaveBeenCalledWith("yes");
    // expect(onFail.mock.calls.length).toBe(0);
    expect(onFail).toHaveBeenCalledTimes(0);
  });
});

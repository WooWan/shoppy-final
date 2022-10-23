const fetchProduct = require("../async.js");

describe("async", () => {
  //1. done()을 이용한 비동기 함수 검증
  // done을 이용하면 일정시간을 기다려야 함으로 코드 가독성, 시간 모두 비효율적
  it("async", (done) => {
    fetchProduct().then((data) => {
      expect(data).toEqual({ item: "Milk", price: 200 });
      done();
    });
  });

  //2. async- return을 이용한 비동기 함수 검증
  it("async-return", () => {
    return fetchProduct().then((data) => {
      expect(data).toEqual({ item: "Milk", price: 200 });
    });
  });

  //3 async-await을 이용한 비동기 함수 검증
  it("async-await", async () => {
    const data = await fetchProduct();
    await expect(fetchProduct("error")).rejects.toBe("Network error");
    expect(data).toEqual({ item: "Milk", price: 200 });
  });

  //4.async-resolves를 이용한 비동기 함수 검증
  it("async-resolves", () => {
    return expect(fetchProduct()).resolves.toEqual({
      item: "Milk",
      price: 200,
    });
  });

  //5.async-rejects를 이용한 비동기 함수 검증
  it("async-rejects", () => {
    return expect(fetchProduct("error")).rejects.toBe("Network error");
  });

  //6. async-await-rejects를 이용한 비동기 함수 검증
  it("async-await-rejects", async () => {
    await expect(fetchProduct("error")).rejects.toBe("Network error");
  });
});

const UserService = require("../user_service");
const UserClient = require("../user_client");

//클래스 mocking
jest.mock("../user_client.js");
const StubUserClient = require("./stub_user_client");

describe("유저 로그인 테스트", () => {
  const login = jest.fn(async () => "success");

  // 특정 조건일 때 테스트를 하기 위해서는 mock을 사용해야 한다.
  UserClient.mockImplementation(() => {
    return { login };
  });
  let userService;
  beforeEach(() => {
    userService = new UserService(new UserClient());
  });

  it("login 함수가 호출된다.", async () => {
    await userService.login("abc", "asd");
    expect(login).toHaveBeenCalledTimes(1);
  });

  //   it("로그인 성공시 유저 정보를 반환한다.", async () => {
  //     const user = await userService.login("id", "password");
  //     expect(user).toEqual({ id: "id", password: "password" });
  //     console.log(user);
  //   });
});

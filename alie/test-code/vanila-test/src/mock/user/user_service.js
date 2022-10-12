class UserService {
  constructor(userClient) {
    this.userClient = userClient;
    this.isLoggedIn = false;
  }

  login(id, password) {
    // 네트워크 통신이 함수 로직 안에 존재한다면, 테스트하기 어려움
    // 분리한다면 mock 또는 stub을 사용하여 테스트 가능
    if (!this.isLoggedIn) {
      //return fetch('http://example.com/login/id+password') //
      // .then((response) => response.json());
      return this.userClient
        .login(id, password) //
        .then((data) => (this.isLoggedIn = true));
    }
  }
}

module.exports = UserService;

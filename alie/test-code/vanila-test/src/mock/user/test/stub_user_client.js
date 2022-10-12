class StubUserClient {
  async login() {
    return { id: "id", password: "password" };
  }
}

module.exports = StubUserClient;

class StubProductClient {
  async fetchItems() {
    return [
      { item: "item1", available: true },
      { item: "item2", available: false },
    ];
  }
}

module.exports = StubProductClient;

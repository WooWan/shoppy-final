const ProductService = require("../product_service");
const StubProductClient = require("./stub_product_client");

describe("product service with di", () => {
  let productService;

  beforeEach(() => {
    productService = new ProductService(new StubProductClient());
  });

  it("di를 이용한 product service 테스트", () => {
    return productService.fetchAvailableItems().then((items) => {
      expect(items).toEqual([{ item: "item1", available: true }]);
    });
  });
});

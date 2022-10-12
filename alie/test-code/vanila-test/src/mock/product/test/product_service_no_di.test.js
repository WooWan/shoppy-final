const ProductService = require("../product_service_no_di");
const ProductClient = require("../product_client");

jest.mock("../product_client.js");
describe("ProductSErvice", () => {
  beforeEach(() => {
    productService = new ProductService();
    // ProductClient.mockClear();
  });
  //product client의 fetchItems 함수를 mock 함수로 대체
  const fetchItems = jest.fn(async () => {
    return [
      { item: "item1", available: true },
      { item: "item2", available: false },
    ];
  });
  //product service의 productClient를 mock 함수로 대체
  //fetchItems mock 함수를 return
  ProductClient.mockImplementation(() => {
    return { fetchItems };
  });
  let productService;

  it("available items를 filter한다.", async () => {
    const items = await productService.fetchAvailableItems();
    expect(items.length).toBe(1);
    return productService.fetchAvailableItems().then((items) => {
      expect(items).toEqual([{ item: "item1", available: true }]);
    });
  });
});

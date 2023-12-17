import HTTPRequest from "../src/HTTPRequest";

describe("HTTPRequest", () => {
  describe("fetchData", () => {
    const http = new HTTPRequest();

    afterEach(() => jest.clearAllMocks());

    test("通常のresolveを見る", async () => {
      const response = await http.fetchData("http://sample.com/api/data");
      expect(response).toEqual({
        data: "Sample Data",
        url: "http://sample.com/api/data",
      });
    });

    test("強制的にrejectを返すようにする", async () => {
      jest.spyOn(HTTPRequest.prototype, "fetchData").mockRejectedValue("hack");
      await expect(() =>
        http.fetchData("http://sample.com/api/data")
      ).rejects.toBe("hack");
    });

    test("強制的にresolveを適当に書き換える", async () => {
      jest
        .spyOn(HTTPRequest.prototype, "fetchData")
        .mockResolvedValue({ data: "wa...wxa..." });

      expect(await http.fetchData("http://sample.com/api/data")).toEqual({
        data: "wa...wxa...",
      });
    });
  });
});

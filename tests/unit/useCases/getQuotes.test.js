const GetQuotesUseCase = require("../../../src/useCases/getQuotes.js");

describe("getQuotes", () => {
  it("returns an array response", () => {
    var getQuotes = new GetQuotesUseCase();

    expect(getQuotes.execute()).toEqual([]);
  });
});
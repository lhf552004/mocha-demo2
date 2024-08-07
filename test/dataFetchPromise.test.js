const { expect } = require("chai");

const { fetchDataPromise } = require("../src/dataFetchPromise");

describe("Fetch Data Promise", function () {
  before(async function () {
    // Dynamically import chai-as-promised
    const chaiAsPromised = await import("chai-as-promised");
    require("chai").use(chaiAsPromised.default);
  });

  it("callback with data", async function () {
    const result = await fetchDataPromise();
    expect(result).to.equal("data");
  });

  it("should resolve", function () {
    const promise = fetchDataPromise();
    expect(promise).to.eventually.equal("data");
  });
});

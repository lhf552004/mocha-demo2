// test/service.test.js
const { expect } = require("chai");
const sinon = require("sinon");
const { getData } = require("../src/service");
const api = require("../src/api");

describe("Service test", function () {
  let fetchStub;

  beforeEach(() => {
    fetchStub = sinon.stub(api, "fetch");
  });

  it("Get Data", async function () {
    const mockData = { data: { id: 1, name: "Joe" } };
    fetchStub.resolves(mockData);
    const result = await getData(1);
    expect(fetchStub.calledOnce).to.be.true;
    expect(result).to.equal(mockData);
  });

  afterEach(function () {
    fetchStub.restore();
  });
});

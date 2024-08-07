const { expect } = require("chai");
const { fetchData } = require("../src/fetchData");
const sinon = require("sinon");

describe("Fetch Data", function () {
  it("callback with data", function () {
    const myfunction = sinon.spy(fetchData);
    myfunction((data) => {
      expect(data).to.equal("data");
    });
  });

  it("call once", function () {
    const myfunction = sinon.spy(fetchData);
    myfunction(console.log);

    expect(myfunction.calledOnce).to.be.true;
  });
});

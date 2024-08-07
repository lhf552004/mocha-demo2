const { expect } = require("chai");

const { multiply, add } = require("../src/math");

describe("math testing", function () {
  it("multiply", function () {
    const result = multiply(10, 10);
    expect(result).to.equal(100);
  });

  it("add", function () {
    const result = add(10, 10);
    expect(result).to.equal(20);
  });
});

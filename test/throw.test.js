const { expect } = require("chai");
const { throwError } = require("../src/throw");

describe("Throw testing", function () {
  it("Throw error", function () {
    expect(() => throwError()).to.throw("Invalid");
  });
});

// test/fetch.test.js
const { describe, it } = require("mocha");
const { expect } = require("chai");
const axios = require("axios");
const sinon = require("sinon");
const { fetch } = require("../src/api");

describe("fetchUserData", function () {
  beforeEach(async function () {
    // const chaiAsPromised = await import("chai-as-promised");
    // require("chai").use(chaiAsPromised.default);
    console.log("Before each");
  });

  it("should throw error for null", async function () {
    await expect(fetch(null)).to.be.rejectedWith("Invalid input");
  });

  it("should fetch user data correctly", async function () {
    const mockResponse = {
      data: {
        id: 1,
        name: "John Doe",
      },
      status: "success",
    };
    sinon.stub(axios, "get").resolves(mockResponse);
    const userId = 1;
    const userData = await fetch(userId);
    expect(userData).to.have.property("id", userId);
    expect(userData).to.have.property("name", "John Doe");
  });

  afterEach(function () {
    sinon.restore();
    console.log("After each");
  });
});

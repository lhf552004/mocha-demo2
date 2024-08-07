// src/service.js
const { fetch } = require("./api");

function getData(userId) {
  return fetch(userId);
}

module.exports = { getData };

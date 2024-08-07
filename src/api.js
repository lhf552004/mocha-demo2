// src/api.js
const axios = require("axios");

async function fetch(userId) {
  if (!userId) {
    throw new Error("Invalid input");
  }
  const response = await axios.get(`https://api.example.com/users/${userId}`);
  return response.data;
}

module.exports = { fetch };

function fetchData(callback) {
  setTimeout(() => {
    callback("data");
  }, 200);
}

module.exports = { fetchData };

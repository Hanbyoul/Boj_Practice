const fs = require("fs");
const [nx, array] = fs.readFileSync("ex.txt").toString().trim().split("\n");

const [n, x] = nx.split(" ").map(Number);

const result = array
  .split(" ")
  .map(Number)
  .filter((array) => array < x);

console.log(result.join(" "));

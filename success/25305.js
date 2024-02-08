const input = require("fs")
  .readFileSync("ex.txt")
  .toString()
  .trim()
  .split("\n");
const [N, K] = input.shift().split(" ").map(Number);

const cutLine = input
  .join()
  .split(" ")
  .map(Number)
  .sort((a, b) => b - a)[K - 1];

console.log(cutLine);

const input = require("fs")
  .readFileSync("ex.txt")
  .toString()
  .trim()
  .split("\n")
  .map(Number);
const avg = input.reduce((prev, current) => prev + current, 0) / 5;
const mid = input.sort((a, b) => a - b)[2];
console.log(avg);
console.log(mid);

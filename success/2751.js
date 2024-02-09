// 시간 초과
// const input = require("fs")
//   .readFileSync("ex.txt")
//   .toString()
//   .trim()
//   .split("\n")
//   .splice(1)
//   .map(Number)
//   .sort((a, b) => a - b)
//   .forEach((n) => console.log(n));

const input = require("fs")
  .readFileSync("ex.txt")
  .toString()
  .trim()
  .split("\n")
  .splice(1)
  .map(Number)
  .sort((a, b) => a - b);

console.log(input.join("\n"));

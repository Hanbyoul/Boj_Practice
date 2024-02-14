const input = require("fs")
  .readFileSync("ex.txt")
  .toString()
  .trim()
  .split("")
  .map(Number)
  .sort((a, b) => b - a);

console.log(input.join(""));

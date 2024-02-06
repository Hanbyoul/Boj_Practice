const input = require("fs")
  .readFileSync("ex.txt")
  .toString()
  .trim()
  .split("\n")
  .map(Number)
  .splice(1)
  .sort((a, b) => a - b)
  .forEach((a) => console.log(a));

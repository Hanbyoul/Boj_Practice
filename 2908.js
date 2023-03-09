const fs = require("fs");
const input = fs
  .readFileSync("ex.txt")
  .toString()
  .trim()
  .split(" ")
  .map((i) => Number(i.split("").reverse().join("")));

console.log(Math.max(...input));

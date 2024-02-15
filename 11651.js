const input = require("fs")
  .readFileSync("ex.txt")
  .toString()
  .trim()
  .split("\n")
  .slice(1)
  .map((n) => n.split(" ").map(Number))
  .sort((a, b) => (a[1] === b[1] ? a[0] - b[0] : a[1] - b[1]));

console.log(input.map((n) => n.join(" ")).join("\n"));

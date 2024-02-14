const input = require("fs")
  .readFileSync("ex.txt")
  .toString()
  .trim()
  .split("\n")
  .map((i) => i.split(" ").map(Number));

const N = input.shift();

const sorting = input.sort((a, b) =>
  a[0] === b[0] ? a[1] - b[1] : a[0] - b[0]
);

console.log(sorting.map((i) => i.join(" ")));

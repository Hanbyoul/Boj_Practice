const [num, ...arr] = require("fs")
  .readFileSync("ex.txt")
  .toString()
  .trim()
  .split("\n");

const [N] = num.split(" ").map(Number);

const targetN = new Set(arr.splice(0, N));

const result = arr.filter((v) => targetN.has(v));

console.log(result.length);

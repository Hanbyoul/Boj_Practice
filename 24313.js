const [fn, c, n0] = require("fs")
  .readFileSync("ex.txt")
  .toString()
  .trim()
  .split("\n")
  .map((i) => i.split(" ").map(Number));

const [a1, a0] = fn;

const Fn = a1 * n0 + a0;

const Gn = c * n0;

console.log(Fn <= Gn && a1 <= c ? 1 : 0);

const [n, a, b] = require("fs")
  .readFileSync("ex.txt")
  .toString()
  .trim()
  .split("\n")
  .map((n) => n.split(" "));

const [A, B] = n.map(Number);
console.log(A + B); // 8

const setAB = new Set([...a, ...b]); // AUB (AB합집합)
console.log(setAB.size); // 6

console.log(setAB.size * 2 - (A + B));

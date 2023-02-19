const fs = require("fs");
const input = fs
  .readFileSync("예제.txt")
  .toString()
  .trim()
  .split(" ")
  .map((i) => +i);
const [a, b, c] = input;
const ac = a % c;
const bc = b % c;

console.log((a + b) % c);
console.log((ac + bc) % c);
console.log((a * b) % c);
console.log((ac * bc) % c);

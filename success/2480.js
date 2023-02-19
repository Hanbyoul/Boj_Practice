const fs = require("fs");
const [a, b, c] = fs
  .readFileSync("ex.txt")
  .toString()
  .trim()
  .split(" ")
  .map((i) => +i);

if (a === b && a === c) {
  console.log(10000 + 1000 * a);
} else if (a == b || a == c) {
  console.log(1000 + 100 * a);
} else if (b == c) {
  console.log(1000 + 100 * b);
} else {
  console.log(Math.max(a, b, c) * 100);
}

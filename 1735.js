const [a, b] = require("fs")
  .readFileSync("ex.txt")
  .toString()
  .trim()
  .split("\n")
  .map((n) => n.split(" ").map(Number));

let molecule = a[0] * b[1] + a[1] * b[0];
let denominator = a[1] * b[1];

// gcd
function calculate(a, b) {
  let min = Math.min(a, b);
  let max = Math.max(a, b);
  let temp = 0;
  while (min !== 0) {
    temp = max % min;
    max = min;
    min = temp;
  }
  return max;
}

const gcd = calculate(molecule, denominator);

console.log(molecule / gcd, denominator / gcd);

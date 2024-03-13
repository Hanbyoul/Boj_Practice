const input = require("fs")
  .readFileSync("ex.txt")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

// 최대공약수
function gcd(a, b) {
  let r = 0;
  while (b !== 0) {
    r = a % b;
    a = b;
    b = r;
  }
  return a;
}

input.sort((a, b) => b - a);
// 최소공배수
console.log((input[0] * input[1]) / gcd(input[0], input[1]));

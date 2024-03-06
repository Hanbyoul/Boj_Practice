const [n, ...arr] = require("fs")
  .readFileSync("ex.txt")
  .toString()
  .trim()
  .split("\n")
  .map((i) => i.split(" ").map(Number));

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

let result = [];
for (let i = 0; i < arr.length; i++) {
  [a, b] = arr[i].sort((a, b) => b - a);
  // 최소공배수
  console.log((a * b) / gcd(a, b));
}

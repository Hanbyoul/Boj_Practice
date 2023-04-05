const [N, B] = require("fs")
  .readFileSync("ex.txt")
  .toString()
  .trim()
  .split(" ");

let x = {};
let val = 0;
let result = 0;
for (let j = 0; j < +B; j++) {
  if (j > 9) {
    val = String.fromCharCode(j + 55);
  }
  x[val] = j;
  val++;
}

let cnt = N.length - 1;

for (let i = 0; i <= cnt; i++) {
  result += x[N[i]] * Math.pow(B, cnt - i);
}

console.log(result);

let test = parseInt(N, +B);

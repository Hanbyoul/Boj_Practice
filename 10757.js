const [A, B] = require("fs")
  .readFileSync("ex.txt")
  .toString()
  .trim()
  .split(" ");

console.log(A + B);

console.log(BigInt(A) + BigInt(B));

let num = 9223372036854775807;
let str = "9223372036854775808";

console.log(BigInt(num + str));
console.log(BigInt(str + num));

const n = require("fs").readFileSync("ex.txt").toString() * 1;

const num = BigInt(n);

const result = (num * (num - 1n) * (num - 2n)) / 6n;

console.log(result);
console.log(3);

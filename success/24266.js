const n = require("fs").readFileSync("ex.txt").toString().trim();

let num = BigInt(n);

console.log(`${num * num * num}`);
console.log(3);

const fs = require("fs");
const input = fs.readFileSync("ex.txt").toString().trim() * 1;

let x = [];
let y = [];
let z = [];
for (let i = input; i > 0; i--) {
  let str = " ".repeat(input - i) + "*".repeat(i * 2 - 1);
  x.push(str);
}

y = x.slice().reverse().slice(1, input);
z = [...x, ...y];

console.log(z.join("\n"));

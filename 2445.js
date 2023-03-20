const fs = require("fs");
const input = fs.readFileSync("ex.txt").toString().trim() * 1;

let x = [];
let y = [];
for (let i = 1; i <= input; i++) {
  let str = "*".repeat(i) + " ".repeat((input - i) * 2) + "*".repeat(i);
  x.push(str);
}

y = x.slice().reverse().slice(1, input);

let z = [...x, ...y];
console.log(z.reverse().join("\n"));

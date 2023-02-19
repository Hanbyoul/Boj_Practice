const fs = require("fs");
const input = fs.readFileSync("ex.txt").toString().trim();
const count = Number(input);

let star = [];
for (let i = 1; i <= count; i++) {
  star.push("*");
  console.log(star.join(""));
}

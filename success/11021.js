const fs = require("fs");
const input = fs.readFileSync("ex.txt").toString().trim().split("\n");

const count = input[0];
for (let i = 1; i <= count; i++) {
  let tCase = `Case #${i}:`;
  let line = input[i].split(" ").map((num) => +num);
  console.log(tCase, line[0] + line[1]);
}

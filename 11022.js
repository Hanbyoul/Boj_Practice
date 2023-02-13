const fs = require("fs");
const input = fs.readFileSync("ex.txt").toString().trim().split("\n");

const count = input[0];

for (let i = 1; i <= count; i++) {
  let j = input[i].split(" ").map((num) => +num);

  console.log(`Case #${i}: ${j[0]} + ${j[1]} = ${j[0] + j[1]}`);
}

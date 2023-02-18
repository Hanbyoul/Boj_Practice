const fs = require("fs");
const input = fs.readFileSync("ex.txt").toString().trim().split("\n");

for (let i = 0; i < input.length; i++) {
  let num = input[i].split(" ").map((num) => num * 1);
  console.log(num[0] + num[1]);
}

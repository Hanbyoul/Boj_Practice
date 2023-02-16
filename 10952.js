const fs = require("fs");
const input = fs.readFileSync("ex.txt").toString().trim().split("\n");

for (let i = 0; i < input.length; i++) {
  let j = input[i].split(" ");
  let result = Number(j[0]) + Number(j[1]);
  if (result > 0) {
    console.log(result);
  }
}

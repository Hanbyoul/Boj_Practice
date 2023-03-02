const fs = require("fs");
const input = fs.readFileSync("ex.txt").toString().trim().split("\n");

const cnt = Number(input[0]);
const num = input[1].split(" ").map(Number);
const max = Math.max(...num);
let modify = 0;

for (let i = 0; i < cnt; i++) {
  modify += (num[i] / max) * 100;
}

console.log(modify / cnt);

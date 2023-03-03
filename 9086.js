const fs = require("fs");
const [T, ...rest] = fs.readFileSync("ex.txt").toString().trim().split("\n");
const results = [];
for (let i = 0; i < T; i++) {
  let char = rest[i].split("");

  results.push(char[0] + char[char.length - 1]);
}

console.log(results.join("\n"));

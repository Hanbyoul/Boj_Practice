const fs = require("fs");
const input = fs.readFileSync("ex.txt").toString().trim() * 1;

for (let i = input; i > 0; i--) {
  console.log(" ".repeat(input - i) + "*".repeat(i * 2 - 1));
}

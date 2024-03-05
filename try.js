const input = require("fs").readFileSync("ex.txt").toString().trim();

let result = new Set();

for (let i = 1; i <= input.length; i++) {
  for (let j = 0; j < input.length - i + 1; j++) {
    result.add(input.slice(j, j + i));
  }
}
console.log(result.size);

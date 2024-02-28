const [N, ...arr] = require("fs")
  .readFileSync("ex.txt")
  .toString()
  .trim()
  .split("\n");

const set1 = new Set();
const result = [];

const [targetN] = N.split(" ").map(Number);

for (let i = 0; i < arr.length; i++) {
  if (i < targetN) {
    set1.add(arr[i]);
  } else {
    if (set1.has(arr[i])) result.push(arr[i]);
  }
}

console.log(result.length + "\n" + result.sort().join("\n"));

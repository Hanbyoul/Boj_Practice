const fs = require("fs");
const input = fs
  .readFileSync("ex.txt")
  .toString()
  .trim()
  .split("\n")
  .map((i) => i.split(" ").map(Number));

const TestCase = input.shift();
// console.log(TestCase);
console.log(input);

for (let i = 0; i < TestCase; i++) {
  let avg = 0;
  let count = input[i].shift();

  for (let j = 0; j < count; j++) {
    avg += input[i][j];
  }

  avg = avg / count;
  let upAvg = input[i].filter((i) => avg < i).length;
  let result = ((upAvg / count) * 100).toFixed(3);
  console.log(result + "%");
}

const [N, ...numbers] = require("fs")
  .readFileSync("ex.txt")
  .toString()
  .trim()
  .split("\n")
  .join(" ")
  .split(" ")
  .map(Number);

const rankMap = new Map();

const sortedNumbers = [...new Set(numbers)].sort((a, b) => a - b);

sortedNumbers.forEach((num, i) => {
  rankMap.set(num, i);
});

const ranks = numbers.map((num) => rankMap.get(num));

console.log(...ranks);

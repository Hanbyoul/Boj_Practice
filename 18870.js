const [N, ...numbers] = require("fs")
  .readFileSync("ex.txt")
  .toString()
  .trim()
  .split("\n")
  .join(" ")
  .split(" ")
  .map(Number);

// const X = new Set(numbers);

// const XX = [...X].sort((a, b) => a - b);

// console.log(XX);

// for (let i = 0; i < N; i++) {
//   numbers[i] = XX.indexOf(numbers[i]);
// }

// console.log(...numbers);

const rankMap = new Map();

const sortedNumbers = [...new Set(numbers)].sort((a, b) => a - b);

sortedNumbers.forEach((num, i) => {
  rankMap.set(num, i);
});

const ranks = numbers.map((num) => rankMap.get(num));

console.log(...ranks);

const [, ...numbers] = require("fs")
  .readFileSync("ex.txt")
  .toString()
  .trim()
  .split("\n");

function PrimeNumber(n) {
  if (n <= 1) return PrimeNumber(n + 1);
  if (n % 2 === 0) {
    return n === 2 ? n : PrimeNumber(n + 1);
  }

  for (let i = 3; i <= Math.sqrt(n); i += 2) {
    if (n % i === 0) {
      return PrimeNumber(n + 1);
    }
  }
  return n;
}

const result = [];

numbers.forEach((i) => result.push(PrimeNumber(Number(i))));

console.log(result.join("\n"));

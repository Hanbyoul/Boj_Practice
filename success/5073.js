// 7 7 7
// 6 5 4
// 3 2 5
// 6 2 6
// 0 0 0

// Equilateral :  세 변의 길이가 모두 같은 경우
// Isosceles : 두 변의 길이만 같은 경우
// Scalene : 세 변의 길이가 모두 다른 경우
// Invalid : max > (n1 + n2)

const input = require("fs")
  .readFileSync("ex.txt")
  .toString()
  .trim()
  .split("\n")
  .slice(0, -1)
  .map((i) => i.split(" ").map(Number));

for (let i = 0; i < input.length; i++) {
  const sorted = input[i].sort((a, b) => b - a);
  const [a, b, c] = sorted;

  if (a === b && b === c) {
    console.log("Equilateral");
  } else if (a === b || a === c || b === c) {
    a >= b + c ? console.log("Invalid") : console.log("Isosceles");
  } else if (a !== b && b !== c && a !== c) {
    a >= b + c ? console.log("Invalid") : console.log("Scalene");
  }
}

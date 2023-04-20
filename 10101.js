const [a, b, c] = require("fs")
  .readFileSync("ex.txt")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

if (a + b + c === 180) {
  if ((a, b, c === 60)) {
    console.log("Equilateral");
  } else if (a === b || b === c || a === c) {
    console.log("Isosceles");
  } else if (a !== b && b !== c && a !== c) {
    console.log("Scalene");
  }
} else {
  console.log("Error");
}

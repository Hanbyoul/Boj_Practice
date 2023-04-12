// const [A, B] = require("fs")
//   .readFileSync("ex.txt")
//   .toString()
//   .trim()
//   .split(" ");

// console.log(A + B);

// console.log(BigInt(A) + BigInt(B));

// let result = String(BigInt(A) + BigInt(B));

// console.log(result);
const [A, B] = require("fs")
  .readFileSync("ex.txt")
  .toString()
  .split(" ")
  .map((num) =>
    num
      .split("")
      .map((val) => Number(val))
      .reverse()
  );

console.log(A.length);
console.log(B.length);

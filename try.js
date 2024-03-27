// function isPrimeNumber(n) {
//   if (n <= 1) return;

//   if (!(n % 2)) {
//     return n === 2 ? n : undefined;
//   }

//   for (let i = 3; i <= Math.sqrt(n); i += 2) {
//     if (!(n % i)) {
//       return;
//     }
//   }
//   return n;
// }

// const result = [];
// for (let i = start; i <= end; i++) {
//   let temp = isPrimeNumber(i);
//   if (temp) {
//     result.push(temp);
//   }
// }

// console.log(result.join("\n"));

const [start, end] = require("fs")
  .readFileSync("ex.txt")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

// 배열 index와 숫자를 맞추기 위해 범위의 마지막 숫자에 + 1
const numbers = Array.from({ length: end + 1 }, (v) => (v = true)); // boolean 처리

numbers[0] = false; // 소수도 합성수도 아닌 유일한 자연수 0 제거
numbers[1] = false; // 소수도 합성수도 아닌 유일한 자연수 1 제거

for (let i = 2; i <= end; i++) {
  if (numbers[i]) {
    for (let j = 2 * i; j <= end; j += i) {
      numbers[j] = false;
    }
  }
}

console.log(numbers);
const result = [];
for (let i = start; i <= end; i++) {
  if (numbers[i]) {
    result.push(i);
  }
}
console.log(result.join("\n"));

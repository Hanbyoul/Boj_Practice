const [min, max] = require("fs")
  .readFileSync("ex.txt")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

let arr = Array.from({ length: max + 1 }).fill(true);
let sum = 0;
const sqrt = parseInt(Math.sqrt(max));

arr[0] = arr[1] = false;

for (let i = 2; i <= sqrt; i++) {
  if (arr[i]) {
    for (let j = 2; i * j <= max; j++) {
      arr[i * j] = false;
    }
  }
}

let primeNumber = arr
  .map((num, index) => {
    if (num) {
      return (num = index);
    }
  })
  .filter((i) => i !== undefined && i >= min && i <= max);

for (let k = 0; k < primeNumber.length; k++) {
  sum += primeNumber[k];
}

if (primeNumber.length >= 1) {
  console.log(sum);
  console.log(primeNumber[0]);
} else {
  console.log(-1);
}

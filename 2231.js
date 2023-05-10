const target = require("fs").readFileSync("ex.txt").toString().trim();

let start = +target - target.length * 9;

let result = 0;

for (let i = start; i < +target; i++) {
  let destructuring = start + "";
  let deSum = 0;

  for (let j = 0; j < destructuring.length; j++) {
    deSum += destructuring[j] * 1;
  }
  deSum += start;

  if (deSum === +target) {
    result = start;
    break;
  }

  start++;
}
console.log(result);

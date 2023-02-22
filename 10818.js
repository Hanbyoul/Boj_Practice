const fs = require("fs");
let [cnt, array] = fs.readFileSync("ex.txt").toString().trim().split("\n");
cnt = Number(cnt);
array = array.split(" ").map(Number);

// array.sort((a, b) => {
//   return a - b;
// });

// console.log(array[0], array[cnt - 1]);

// 5
// 20 10 35 30 7

let min = array[0];
let max = array[0];

for (let i = 0; i < cnt; i++) {
  if (min > array[i]) {
    min = array[i];
  }

  if (max < array[i]) {
    max = array[i];
  }
}

console.log(min, max);

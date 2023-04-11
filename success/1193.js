//홀 1/1
//짝 1/2 2/1
//홀 3/1 2/2 1/3
//짝 1/4 2/3 3/2 4/1
//홀 5/1 4/2 3/3 2/4 1/5
//짝 1/6 2/5 3/4 4/3 5/2 6/1
//홀 7/1 6/2 5/3 4/4 3/5 2/6 1/7
//짝 1/8 2/7 3/6 4/5 5/4 6/3 7/2 8/1
//홀 9/1 8/2 7/3 6/4 5/5 4/6 3/7 2/8 1/9

// 홀 수 라인에서는
// 분자 내림차순으로 작아지고
// 분모 오름차순으로 올라간다

//Case 1
// let x = require("fs").readFileSync("ex.txt").toString().trim() * 1;
// let counter = 0;
// let asc = [];
// let desc = [];

// while (x > 0) {
//   counter++;
//   x -= counter;
// }

// for (let i = 0; i < counter; i++) {
//   asc.push(i + 1);
//   desc.push(counter - i);
// }

// console.log(asc, desc);

// if (counter % 2 === 0) {
//   console.log(`${asc[counter - 1 + x]}/${desc[counter - 1 + x]}`);
// } else {
//   console.log(`${desc[counter - 1 + x]}/${asc[counter - 1 + x]}`);
// }

//Case 2
let x = require("fs").readFileSync("ex.txt").toString().trim() * 1;
let counter = 0;

while (x > 0) {
  counter++;
  x -= counter;
}

if (counter % 2 === 0) {
  console.log(`${counter + x}/${-x + 1}`);
} else {
  console.log(`${-x + 1}/${counter + x}`);
}

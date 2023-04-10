// x
// 1/1
// 1/2 2/1
// 3/1 2/2 1/3
// 1/4 2/3 3/2 4/1
// 5/1 4/2 3/3 2/4 1/5
// 1/6 2/5 3/4 4/3 5/2 6/1
// 7/1 6/2 5/3 4/4 3/5 2/6 1/7
// 1/8 2/7 3/6 4/5 5/4 6/3 7/2 8/1
// 9/1 8/2 7/3 6/4 5/5 4/6 3/7 2/8 1/9

// const input = require("fs").readFileSync("ex.txt").toString().trim() * 1;
// console.log(input);

let x = 11;
let counter = 0;

while (x > 0) {
  counter++;
  x -= counter;
}
console.log("x : ", x, "counter :", counter);

// if (counter % 2 === 0) {
//   // 짝수 라인이라면 분자는 오름차순,분모는 내림차순
//   console.log(`${counter + x}/${1 + -x}`);
// } else {
//   // 홀수 라인이라면 분자는 내림차순,분모는 오름차순
//   console.log(`${1 + -x}/${counter + x} `);
// }

let asc = [];
let desc = [];
for (let i = 1; i < counter; i++) {
  asc.push(i);
  desc.push(i - counter);
}

console.log(asc);
console.log(desc);

//A B V

// 낮 + A
// 밤 - B
// 목표  V 에 도착시 - 되지않는다.

//2 1 5

//0 ~ 2  +2
//2 ~ 1  -1
// 하루 (1)

//1 ~ 3
//2
// 이틀 (2)

//2 ~ 4
//3
// 삼일 (3)

//3 ~ 5
//4일째 도착

// 5 1 6
// 5
// 4
// 하루(1)

//4 ~ 9
//  이틀(2)

let [A, B, V] = require("fs")
  .readFileSync("ex.txt")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

let counter = 0;
let N = 0;
console.log(A, B, V);

let OneDay = A - B;
let D_Day = V - A;
let days = Math.ceil(D_Day / OneDay) + 1;

console.log(days);

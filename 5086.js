// 8 16
// 32 4
// 17 5
// 0 0

//첫 번째 숫자가 두 번째 숫자의 약수라면 factor를,
//첫 번째 숫자가 두 번째 숫자의 배수라면 multiple을,
//둘 다 아니라면

//입력값이 둘중 하나도 0일 경우 return

// 두번째숫자 % 첫번째 숫자 === 0 일 경우
// 8 , 16   약수
//1,2,4,8,16

// 첫번째숫자 % 두번째 숫자 === 0 일 경우
//32 , 4 배수

//둘다 아닐 경우

const fs = require("fs");
const input = fs
  .readFileSync("ex.txt")
  .toString()
  .trim()
  .split("\n")
  .map((i) => i.split(" ").map(Number))
  .slice(0, -1);
console.log(input);
// for (let i = 0; i < input.length; i++) {
//   [one, two] = input[i];
//   if (one !== 0 || two !== 0) {
//     if (two % one === 0) {
//       console.log("factor");
//     } else if (one % two === 0) {
//       console.log("multiple");
//     } else {
//       console.log("neither");
//     }
//   }
// }

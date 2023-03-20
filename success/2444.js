const fs = require("fs");
const input = fs.readFileSync("ex.txt").toString().trim() * 1;

let star = "*".repeat(input * 2 - 1).split(""); //배열로 * 만들기
let start = 0;
let end = input * 2 - 2;
let halfStar = [];

for (let i = 0; i < input; i++) {
  halfStar.push(star.join(""));
  star[start] = " ";
  star[end] = "";
  start++;
  end--;
}

let halfStar2 = halfStar.slice().reverse().slice(0, -1); //마지막 *은 제외하고 복사된다.

let fullStar = [...halfStar2, ...halfStar];
console.log(fullStar.join("\n"));

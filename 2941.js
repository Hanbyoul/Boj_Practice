//ljes=njak

//ddz=z=

//2글자가 1개의 문자로 표시되는 경우의 수
//  c=
//  c-
//  d-
//  lj
//  nj
//  s=
//  z=

//3글자가 1개의 문자로 표시되는 경우의 수
//  dz=

//입력값에서 3글자 >>2글자>>> 나머지 1 에 해당하는 문자를 검색해서 있으면
//자르면 안됨.

//정규식.....?

const fs = require("fs");
const input = fs.readFileSync("ex.txt").toString().trim();
let count = 0;
console.log(input.split("lj").filter((i) => i === ""));

count += input.split("lj").filter((i) => i === "").length;
console.log("필터 후", input);
input.split("lj").join("");
console.log(input);
console.log(count);
// while(true){

// }

const Croatia = {};

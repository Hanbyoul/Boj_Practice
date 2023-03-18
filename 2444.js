const fs = require("fs");
const input = fs.readFileSync("ex.txt").toString().trim() * 1;
console.log(input);

//000050000
//000456000
//003456700
//023456780
//123456789
//023456780
//003456700
//000456000
//000050000

let side = "";
let star = "*";
let result = "";
let max = input * 2 - 1;

// for (let i = 1; i <= max; i++) {
// result = input-i * side

//star length +2 max까지

//if star.length가 max일 경우 다시 -- 1까지 줄이기

// }

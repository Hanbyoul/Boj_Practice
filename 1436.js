const input = require("fs").readFileSync("ex.txt").toString().trim() * 1;

let resultArr = [];
let i = 666;
let target = "666";
while (resultArr.length !== input) {
  let str = String(i);
  if (str.includes(target)) {
    resultArr.push(i);
  }
  i++;
}

console.log(resultArr.reverse()[0]);

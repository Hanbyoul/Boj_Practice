const fs = require("fs");
const input = fs.readFileSync("ex.txt").toString();
// string % number = number
// 계산식이 들어가기 때문에 자동으로 number 형변환이 이루어지며
// return 값을 상수로 정해 놨기 때문에 input의 type 설정이 필요 하지 않게 되었다.

if (input % 4 === 0) {
  if (input % 100 !== 0 || input % 400 === 0) {
    return console.log(1);
  } else {
    return console.log(0);
  }
} else {
  console.log(0);
}

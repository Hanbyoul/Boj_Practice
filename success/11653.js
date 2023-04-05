let input = require("fs").readFileSync("ex.txt").toString().trim() * 1;

const sqrt = parseInt(Math.sqrt(input));
console.log("제곱근", sqrt);
let cnt = 2;
while (cnt <= sqrt && input > 2) {
  if (input % cnt === 0) {
    console.log(cnt);
    input /= cnt;
  } else {
    cnt++;
  }
}
console.log(input === 1 ? "" : input);

//12
// 1 ,2 ,3,4,6,12

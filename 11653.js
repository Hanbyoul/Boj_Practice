let input = require("fs").readFileSync("ex.txt").toString().trim() * 1;

let cnt = 2;

while (input >= 2) {
  if (input % cnt === 0) {
    console.log(cnt);
    input /= cnt;
  } else {
    cnt++;
  }
}

//const sqrt = parseInt(Math.sqrt(input));
//console.log("제곱근", sqrt);
//   if (sqrt > 100) {
//     while (cnt <= sqrt && input !== 1) {
//       if (input % cnt === 0) {
//         results.push(cnt);

//         input /= cnt;
//       } else {
//         cnt++;
//       }
//     }
//   }

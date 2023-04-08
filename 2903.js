// 사각형의 갯수 , 꼭짓점
// 1개 = 4점

// 1) 각변의 중앙 4점
// 2) 중심에 1점
// 1 = 4 + 4 + 1 = 9 가된다

// 1 = 9  ( 4 + ((4^1)+1))
//
// 2 = 25 ( 16 + 9 )
//
// 3 = 81 (56 + 25)
//               56
// 4 =  345 (x)=(4^4 + 89)
//
// 5 =   (x) = (4^5 + 65)
//

/// 3^2 / 5^2  / 9^2  / 15^2 /

const input = require("fs").readFileSync("ex.txt").toString().trim() * 1;

console.log(input);

let first = 2;
let result = 0;

for (let i = 0; i < 1; i++) {
  first += Math.pow(2, i);
  console.log(first);
  break;
}

// 내위치 x,y

// 각 변이 좌표축에 평행

// 왼쪽 아래 꼭짓점은 (0, 0), 오른쪽 위 꼭짓점은 (w, h)

// 직사각형의 경계선까지 가는 거리의 최솟값

// x,y,w,h

// w,h 1~1000
// x = 1 ~ w - 1
// y = 1 ~ h - 1
// x y     w  h
//(6,2)   (10,3)

// 가로 최대 길이 w
// 높이 최대 길이 h

//

// 9
// 8
// 7
// 6
// 5        o
// 4
// 3
// 2
// 1 o
// 0 1 2 3 4 5 6 7 8 9

// x값  /  w-x값 / y값 / h-y값 중 min값 채택

const [x, y, w, h] = require("fs")
  .readFileSync("ex.txt")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

console.log(x, y, w, h);

console.log(Math.min(x, y, w - x, h - y));

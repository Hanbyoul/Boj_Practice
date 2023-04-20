//옥구슬의 위치는 2 차원 정수 좌표

//옥구슬은 같은 위치에 여러 개가 발견될 수도 있으며
//x 축의 양의방향을 동쪽, y 축의 양의방향을 북쪽이라고 가정한다.

// 좌표
// x  y    x  y    x  y    x  y
//(2, 1), (3, 2), (5, 2), (3, 4)

// 사각형으로 좌표변환
// x  y    x  y    x  y    x  y

// X -가장 작은 x 와 가장 큰 x 추출
//  2,5

// Y -가장 작은 y와 가장 큰 y 추출
//  1,4

//(2, 1), (5, 1), (2, 4), (5, 4)

//ex 좌표가 2개부터 사각형을 만들 수 있다.
// (2,4) , (5,1)
// (2,1) ,(5,1) , (2,4) , (5,4)
// 5-2 =3 * 4-1= 3
// 9

//넓이는 (5 - 2) × (4 - 1) = 9 가 된다.

// 3
//  x  y
// 20 24
// 40 21
// 10 12

// 가장 크고,작은 x,y
//  smallX,largeX , smallY,largeY
// (10,12) (40,24)
//  40 - 10 = 30 *  24 - 12 = 12
// 30 * 12 = 360

const [N, ...area] = require("fs")
  .readFileSync("ex.txt")
  .toString()
  .trim()
  .split("\n");

const xList = [];
const yList = [];
console.log(area[0].split(" "));
for (let i = 0; i < +N; i++) {
  const [x, y] = area[i].split(" ").map(Number);

  xList.push(x);
  yList.push(y);
}

const [smallX, LargeX] = [Math.min(...xList), Math.max(...xList)];
const [smallY, LargeY] = [Math.min(...yList), Math.max(...yList)];
const result = (LargeX - smallX) * (LargeY - smallY);
console.log(result);

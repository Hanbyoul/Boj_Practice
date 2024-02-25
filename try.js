const [N, arr1, M, arr2] = require("fs")
  .readFileSync("ex.txt")
  .toString()
  .trim()
  .split("\n")
  .map((i) => i.split(" "));

//첫 째줄 N = (상근이의 숫자 카드 개 수)
//둘 째줄 = 상근이의 숫자 카드
//3,4 줄  = 상근이의 숫자 카드에서 존재하는지 체크해야 할 카드 개 수

// M은 반드시 모두 순회 해야한다.
// N은 M 숫자만 개 수 를 파악한다?

// const frequencyArr = {};
// for (const num of arr1) {
//   frequencyArr[num] = (frequencyArr[num] || 0) + 1;
// }

// for (let i = 0; i < arr2.length; i++) {
//   if (frequencyArr[arr2[i]]) {
//     arr2[i] = frequencyArr[arr2[i]];
//   } else {
//     arr2[i] = 0;
//   }
// }

// console.log(arr2.join(" "));

const frequencyArr = new Map();
arr1.forEach((n) =>
  frequencyArr.has(n)
    ? frequencyArr.set(n, frequencyArr.get(n) + 1)
    : frequencyArr.set(n, 1)
);

console.log(frequencyArr);

for (let i = 0; i < arr2.length; i++) {
  if (frequencyArr.has(arr2[i])) {
    arr2[i] = frequencyArr.get(arr2[i]);
  } else {
    arr2[i] = 0;
  }
}

console.log(arr2.join(" "));

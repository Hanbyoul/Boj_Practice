//자신 제외 약수의합과 같으면 완전수

//6 = 1 + 2 + 3

// n이 완전수인지 아닌지

// 6
// 12
// 28
// -1

// 6 = 1 + 2 + 3
// 12 is NOT perfect.
// 28 = 1 + 2 + 4 + 7 + 14

//n이 완전수이면 n = 1 + 2 + 3 오름차순 나열
//n이 완전수 아니면 n = n is NOT perfect.

const input = require("fs")
  .readFileSync("ex.txt")
  .toString()
  .trim()
  .split("\n")
  .slice(0, -1)
  .map(Number);

for (let i = 0; i < input.length; i++) {
  let perfect = 0;
  let result = [];
  let n = input[i];
  for (let j = 1; j <= n; j++) {
    if (!(n % j) && n !== j) {
      result.push(j);
      perfect += j;
    }
  }

  if (n === perfect) {
    console.log(`${n} = ${result.join(" + ")}`);
  } else {
    console.log(`${n} is NOT perfect.`);
  }
}

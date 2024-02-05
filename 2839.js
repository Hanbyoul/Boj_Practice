const N = require("fs").readFileSync("ex.txt").toString().trim() * 1;

const large = 5;
const small = 3;
const max = Math.ceil(N / small);
let largeSugarCount = Math.floor(N / large);

for (let i = 0; i < max; i++) {
  if (N < large && N % large !== 0 && N % small !== 0) {
    console.log(-1);
    break;
  }
  if (N % large === 0) {
    console.log(N / large);
    break;
  }

  if (N % small === 0) {
    console.log(N / small);
    break;
  }

  if ((N - largeSugarCount * large) % small === 0) {
    let smallSugarCount = (N - largeSugarCount * large) / small;

    console.log(largeSugarCount + smallSugarCount);
    break;
  } else {
    largeSugarCount--;
  }

  if ((N - largeSugarCount * large) % small === 0) {
    let smallSugarCount = (N - largeSugarCount * large) / small;

    console.log(largeSugarCount + smallSugarCount);

    break;
  }

  if (largeSugarCount === 0) {
    console.log(-1);
    break;
  }

  if (i === max) {
    console.log(-1);
    break;
  }
}

// GPT 코드 개선
// const N = require("fs").readFileSync("ex.txt").toString().trim() * 1;

// const large = 5;
// const small = 3;

// let solutionFound = false;
// for (let largeCount = 0; largeCount * large <= N; largeCount++) {
//     const remainder = N - largeCount * large;
//     if (remainder % small === 0) {
//         console.log(largeCount + remainder / small);
//         solutionFound = true;
//         break;
//     }
// }

// if (!solutionFound) {
//     console.log(-1);
// }

const [min, max] = require("fs")
  .readFileSync("ex.txt")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

let arr = Array.from({ length: max + 1 }).fill(true);
const sqrt = parseInt(Math.sqrt(max));

arr[0] = arr[1] = false;

for (let i = 2; i <= sqrt; i++) {
  if (arr[i]) {
    for (let j = 2; i * j <= max; j++) {
      arr[i * j] = false;
    }
  }
}

let primeNumber = arr
  .map((num, index) => {
    if (num) {
      return (num = index);
    }
  })
  .filter((i) => i !== undefined && i >= min);

if (primeNumber.length >= 1) {
  console.log(primeNumber.reduce((a, b) => a + b, 0));
  console.log(primeNumber[0]);
} else {
  console.log(-1);
}

// 소수(Prime Number)란 2보다 큰 자연수 중에서
// 1과 자기 자신을 제외한 자연수로는 나누어떨어지지 않는 자연수입니다.
// 1은 소수가 아니다.

//Case 1
// 2부터 X-1까지의 모든 자연수 만큼 반복
let Num = 11;

for (let i = 2; i < Num; i++) {
  //2 ~ 15까지 연산
  // console.log(`${Num} % ${i} = ${Num % i}`);
}

//Case 2
//제곱근 까지만 반복문을 사용
// console.log("소수점 이하는 버린다", parseInt(Math.sqrt(Num)));

for (let i = 2; i <= parseInt(Math.sqrt(Num)); i++) {
  // console.log(`${Num} % ${i} = ${Num % i}`);
}

// Case 3
// 에라토스테네스의 체
// 1. 구하고자 하는 N까지의 자연수를 나열한다.  이때 배열로 나열을 할 것이기때문에  0을 포함시켜야 해서 +1 한다.
// 2. 초기값으로 boolean을 사용하거나 ,숫자 0or1로 설정한다.
// 3. 0과 1은 소수가 아니기 때문에 제외 시킨다
// 4. 2부터 제곱근 까지 자기 자신을 제외한 배수들을 제거한다.
let arr = Array.from({ length: Num + 1 }).fill(true);
arr[0] = arr[1] = false;
for (let j = 2; j <= parseInt(Math.sqrt(Num)); j++) {
  if (arr[j] === true) {
    for (let k = 2; j * k <= Num; k++) {
      arr[j * k] = false;
    }
  }
}
console.log(arr);

console.log(
  arr
    .map((el, index) => {
      if (el) return (el = index);
    })
    .filter((i) => i !== undefined)
);

const [num, ...arr] = require("fs")
  .readFileSync("ex.txt")
  .toString()
  .trim()
  .split("\n")
  .map((i) => i.split(" "));

const map1 = new Map([...arr]);

const result = [];
map1.forEach((n, i) => (n === "leave" ? map1.delete(i) : result.push(i)));

console.log(result.sort().reverse().join("\n"));

// 직원들은 반드시 9시부터 6시까지 회사에 있지 않아도 된다.
// 각 직원은 자기가 원할 때 출근할 수 있고, 아무때나 퇴근할 수 있다.

// 이 로그는 어떤 사람이 회사에 들어왔는지, 나갔는지가 기록되어져 있다.
// 로그가 주어졌을 때, 현재 회사에 있는 모든 사람을 구하는

// 첫째 줄에 로그에 기록된 출입 기록의 수 n (2 ≤ n ≤ 매우 큰 수)

// 다음 n개의 줄에는 출입 기록이 순서대로

// enter = 출근
// leave = 퇴근
// 대,소문자 구분
// 현재 회사에 있는 사람의 이름을 사전 순의 역순 reverse

// 출근만 한사람
// 출근후 퇴근 한사람

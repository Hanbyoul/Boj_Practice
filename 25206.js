//전공평점은 전공과목별 [(학점 × 과목평점)의 합을 ] 학점의 총합으로 나눈 값

// 전공평점 : 학점 * 과목평점
//  전공평점의 총합 / 학점의 총합
// 등급이 P인 과목은 계산에서 제외

const fs = require("fs");
const input = fs.readFileSync("ex.txt").toString().trim().split("\n");

//등급이 P를 제외하고 어레이 복사하기

const score = {
  "A+": 4.5,
  A0: 4.0,
  "B+": 3.5,
  B0: 3.0,
  "C+": 2.5,
  C0: 2.0,
  "D+": 1.5,
  D0: 1.0,
  F: 0,
};

let maxGrade = 0;
let maxSubject = 0;
for (let i = 0; i < input.length; i++) {
  let grade = score[input[i].split(" ")[2]];
  let subject = input[i].split(" ")[1];

  if (grade !== undefined) {
    maxGrade += subject * grade;
    maxSubject += +subject;
  }
}

console.log(maxGrade / maxSubject);

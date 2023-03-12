const fs = require("fs");
const input = fs.readFileSync("ex.txt").toString().trim().split("");

const charList = {};
let char = "";
let cnt = 3; // 다이얼에 소요되는 시간

//A의 아스키코드 65 부터 Z의 아스키코드 90 까지 반복문을 진행한다.

for (let i = "A".charCodeAt(0); i <= "Z".charCodeAt(0); i++) {
  // char 변수에 i를 문자열로 변환하여 넣는다.
  char += String.fromCharCode(i);

  // 루프를 돌면서 변수 char에 알파벳을 채운다.
  // 알파벳의 갯수가 3개가 되고 &&
  // 현재의 i값이 R의 아스키코드 가 아니고 &&
  // 현재의 i값이 Y의 아스키코드 가 아닐때
  // char

  if (char.length === 3 && i !== "R".charCodeAt(0) && i !== "Y".charCodeAt(0)) {
    charList[char] = cnt;
    cnt++;
    char = "";
  } else if (char.length === 4) {
    charList[char] = cnt;
    cnt++;
    char = "";
  }
}

const result = input.reduce((acc, current) => {
  for (let Key in charList) {
    //알파벳 객체를 열거한다
    // 이떄 현재 열거중인 Key에 입력값(current)의 문자를 includes로 검색해서
    // 문자가 있다면 if문으로 들어가
    // 현재 Key에 해당되는 cnt값을  acc에 증가 시킨다

    if (Key.includes(current)) {
      acc += charList[Key];
    }
  }
  return acc;
}, 0);

console.log(result);

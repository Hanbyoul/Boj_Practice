const fs = require("fs");
let input = fs.readFileSync("ex.txt").toString().trim().split("\n");

//동일한 문자가 중복되어 나열되는 것은 OK;
//중복없이 나열 OK
//다른위치에 중복 XX
const cnt = input.shift() * 1;
let groupCount = 0;

for (let i = 0; i < cnt; i++) {
  let char = [];
  let word = input[i];
  let isGroup = true;

  for (let j = 0; j < input[i].length; j++) {
    if (char.indexOf(word[j]) === -1) {
      //char에 없는 문자라면
      //새로운 문자 추가
      char.push(word[j]);
    } else {
      // char에 있는 문자라면
      if (char.indexOf(word[j]) !== char.length - 1) {
        //연속된 문자가 아니라면
        isGroup = false;
        break;
      }
    }
  }

  if (isGroup) {
    groupCount += 1;
  }
}

console.log(groupCount);

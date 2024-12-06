// keymap = ["ABACD", "BCEFD"] 두 개의 keymap이 있을 때
// targets = ["ABCD", "AABB"] targets에 있는 문자열을 입력하려고 할 때
// 도출 과정 : ABCD를 입력한다고 하면
// keymap[0]
function solution(keymap, targets) {
  const keyIndices = {};

  // 각 문자의 최소 인덱스를 저장
  for (let key of keymap) {
    for (let i = 0; i < key.length; i++) {
      const char = key[i];
      if (keyIndices[char] === undefined || keyIndices[char] > i + 1) {
        keyIndices[char] = i + 1;
      }
    }
  }

  const result = [];

  for (let target of targets) {
    let count = 0;
    let impossible = false;

    for (let char of target) {
      if (keyIndices[char] === undefined) {
        impossible = true;
        break;
      }
      count += keyIndices[char];
    }

    result.push(impossible ? -1 : count);
  }

  return result;
}

let keymap = ["ABACD", "BCEFD"];
let targets = ["ABCD", "AABB"];

console.log(solution(keymap, targets));

// console.log(keymap[0].split(""));

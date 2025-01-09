// 암호 해석
// 문자열 s의 각 알파벳을 index만큼 뒤의 알파벳으로 바꿔줍니다.
// index만큼의 뒤의 알파벳이 z를 넘어갈 경우 다시 a로 돌아갑니다.
// skip에 있는 알파벳은 제외하고 건너뜁니다.
// 예) s = "aukks" skip = "wbqd" index = 5 일 때
// aukks 각 자리마다 연속된 5개의 알파벳을 가져오지만 skip에 포함된 문자는 가져오지 않음
// a : [b, c, d, e, f] => [c, e, f, g, h]
// u : [v, w, x, y, z] => [v, x, y, z, a]
// k : [l, m, n, o, p] => [l, m, n, o, p]
// k : [l, m, n, o, p] => [l, m, n, o, p]
// s : [t, u, v, x, y] => [t, u, v, x, y]
// answer = "happy"

// AI 최적화
function solution(s, skip, index) {
  let result = [];
  let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');

  // skip에 있는 알파벳 제외
  alphabet = alphabet.filter((char) => !skip.includes(char));

  // s의 각 알파벳을 변환
  for (let char of s) {
    let currentIndex = alphabet.indexOf(char);
    let newIndex = (currentIndex + index) % alphabet.length;
    result.push(alphabet[newIndex]);
  }

  return result.join('');
}

// 처음 고안한 방법
// function solution(s, skip, index) {
//   let result = [];
//   let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
//   let skipArr = skip.split('').sort();
//   let sArr = s.split('');
//   let count = 0;

//   // skip에 있는 알파벳은 제외
//   for (let i = 0; i < alphabet.length; i++) {
//     if (alphabet[i].includes(skipArr[count])) {
//       alphabet.splice(i, 1);
//       count++;
//     }
//   }

//   // s의 각 알파벳을 index만큼 뒤의 알파벳으로 바꿔줍니다.
//   // s가 'a'라면 index = 5인 [c, e, f, g, h] 중에서 h를 가져옴
//   for (let i = 0; i < s.length; i++) {
//     if (alphabet[alphabet.indexOf(sArr[i]) + index] === undefined) {
//       result.push(alphabet[alphabet.indexOf(sArr[i]) + index - alphabet.length]);
//     } else {
//       result.push(alphabet[alphabet.indexOf(sArr[i]) + index]);
//     }
//   }

//   return result.join('');
// }

let s = 'aukks';
let skip = 'wbqd';
let index = 5;

console.log(solution(s, skip, index));
// let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
// let skipArr = skip.split('');

// console.log(alphabet[0].includes(skipArr[0]));

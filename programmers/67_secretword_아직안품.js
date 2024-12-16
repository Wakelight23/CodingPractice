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

function solution(s, skip, index) {
  let answer = "";
  let alphabet = "abcdefghijklmnopqrstuvwxyz";

  for (let i = 0; i < index; i++) {
    alphabet.split("");
  }

  return answer;
}

let s = "aukks";
let skip = "wbqd";
let index = 5;

// console.log(solution(s, skip, index));

let alphabet = "abcdefghijklmnopqrstuvwxyz";

for (let i = 0; i < index; i++) {
  console.log(alphabet.split("").indexOf(s[i]));
}

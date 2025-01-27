// JadenCase
// 모든 단어의 첫 문자가 대문자
// 그 외의 알파벳은 소문자인 문자열
function solution(s) {
  let result = [];
  let sArr = s.split(' ');

  for (let i = 0; i < sArr.length; i++) {
    if (sArr[i]) {
      // 빈 문자열이 아닐 경우에만 처리
      result.push(sArr[i][0].toUpperCase() + sArr[i].slice(1).toLowerCase());
    } else {
      result.push(''); // 빈 문자열은 그대로 추가
    }
  }

  return result.join(' '); // 배열을 다시 문자열로 변환
}

let s = '3people unFollowed me';
// let s = "for the last week";

console.log(solution(s));

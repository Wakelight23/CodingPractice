// "수박수박수박..." 와 같은 패턴 유지하는 문자열 리턴하는 함수
// n개 만큼 반복 예) n = 3, "수박수"
function solution(n) {
  let word1 = '수';
  let word2 = '박';
  let result = '';

  for (let i = 0; i < n; i++) {
    i % 2 === 0 ? (result += word1) : (result += word2);
  }

  return result;
}

let n = 3;

console.log(solution(n));

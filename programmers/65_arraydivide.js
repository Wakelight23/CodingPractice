// 문자열 s가 입력되었을 때 문자열을 여러 문자열로 분해
// 규칙 1 : 첫 글자 = x
// 규칙 2 : 왼쪽에서 오른쪽으로 읽으면서 x와 x가 아닌 다른 글자들 나온 횟수 카운트
// 처음으로 두 횟수가 같아지면 stop, 지금까지 읽은 문자열 분리
// s에 분리한 문자열 빼고 남은 부분에 대해서 이 과정 반복, 남은 부분 없다면 종료
// 분해한 문자열 개수 return하는 함수 solution
function solution(s) {
  let result = 0;
  let xCount = 0;
  let otherCount = 0;
  let x = "";

  for (let char of s) {
    // x가 비었다면
    if (x === "") {
      // s의 문자열을 x로 변환
      x = char;
    }
    // s의 문자열 char와 x가 같다면
    if (char === x) {
      // x에 대한 카운트 증가
      xCount++;
    } else {
      // 같지 않다면 그 외 문자열 카운트 증가
      otherCount++;
    }

    // 두 카운트가 같아졌을 때
    if (xCount === otherCount) {
      // result 카운트 증가
      result++;
      // x, other 카운트 0으로 초기화
      xCount = 0;
      otherCount = 0;
      // x의 문자열 초기화
      x = "";
    }
  }

  // x가 빈공간이 아니라면
  if (x !== "") {
    // 수치가 존재함으로 result 증가
    result++;
  }

  return result;
}

let s = "abracadabra";

console.log(solution(s));

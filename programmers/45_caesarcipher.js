// const upper = Array.from({ length: 26 }, (v, i) => String.fromCharCode(i + 65));
// console.log(upper);

// const lower = Array.from({ length: 26 }, (v, i) => String.fromCharCode(i + 97));
// console.log(lower);

// s = 문자열 n = 정수
// s를 입력했을 때 n번만큼 각 알파벳 하나하나 나눈다
function solution(s, n) {
  let result = "";
  let change = [];

  for (let i = 0; i < s.length; i++) {
    if (s.slice(i, i + 1) === " ") {
      change[i] = s.slice(i, i + 1);
    } else if (s.slice(i, i + 1) === "z") {
      change[i] = s.slice(i, i + 1).charCodeAt(0) + n - 26;
      change[i] = String.fromCharCode(change[i]);
    } else if (s.slice(i, i + 1) === "Z") {
      change[i] = s.slice(i, i + 1).charCodeAt(0) + n - 26;
      change[i] = String.fromCharCode(change[i]);
    } else {
      change[i] = s.slice(i, i + 1).charCodeAt(0) + n;
      change[i] = String.fromCharCode(change[i]);
    }
  }
  result = change.join("");
  return result;
}

console.log(solution("a z b", 4));

// 다른 사람 코드
// function solution(s, n) {
//   let result = "";

//   for (let i = 0; i < s.length; i++) {
//     // 반복문을 통해 아스키코드로 변환
//     let charCode = s.charCodeAt(i);
//     // 공백일때 문자에 공백으로 추가
//     if (charCode === 32) result += String.fromCharCode(charCode);
//     // 공백이 아닌 문자인 경우 대문자와 소문자 구분
//     else {
//       if (charCode <= 90) {
//         charCode += n;
//         // 대문자인데 이동 후 아스키코드값이 90(Z)보다 크다면
//         if (charCode > 90) charCode -= 26;
//       } else {
//         charCode += n;
//         // 소문자인데 이동 후 아스키코드값이 122(z)보다 크다면
//         if (charCode > 122) charCode -= 26;
//       }
//       // 변경된 아스키코드를 모두 문자로 변환 후 추가하기
//       result += String.fromCharCode(charCode);
//     }
//   }
//   return result;
// }

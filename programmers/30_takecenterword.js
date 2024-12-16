// 단어 s의 가운데 글자를 반환하는 함수
// 단어의 길이가 짝수라면 가운데 두글자 반환
function solution(s) {
  return s.length % 2 === 0
    ? String(
        s
          .split('')
          .splice(s.length / 2 - 1, 2)
          .join(''),
      )
    : String(s.split('').splice(s.length / 2, 1));
}

let s = 'abcdef';

console.log(solution(s));

//   if (s.length % 2 === 0) {
//     return String(
//       s
//         .split('')
//         .splice(s.length / 2 - 1, 2)
//         .join(''),
//     );
//   } else {
//     return String(s.split('').splice(s.length / 2, 1));
//   }

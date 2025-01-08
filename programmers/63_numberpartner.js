// AI 최적화
function solution(X, Y) {
  const freqX = Array(10).fill(0); // X의 숫자 빈도수 저장
  const freqY = Array(10).fill(0); // Y의 숫자 빈도수 저장

  // X의 각 숫자 빈도수 계산
  for (let digit of X) {
    freqX[digit]++;
  }

  // Y의 각 숫자 빈도수 계산
  for (let digit of Y) {
    freqY[digit]++;
  }

  let result = [];

  // 공통 숫자의 최소 빈도만큼 결과에 추가
  for (let i = 0; i <= 9; i++) {
    const count = Math.min(freqX[i], freqY[i]);
    if (count > 0) {
      result.push(String(i).repeat(count)); // 해당 숫자를 'count'만큼 추가
    }
  }

  if (result.length === 0) return '-1'; // 공통 숫자가 없는 경우
  const finalResult = result
    .join('')
    .split('')
    .sort((a, b) => b - a)
    .join('');

  return finalResult[0] === '0' ? '0' : finalResult; // 결과가 모두 '0'인 경우 처리
}

// 내가 적은 코드 문제점 : 실행시간이 너무 길다 -> 숫자가 많아졌을 때 교려를 안 함
// function solution(X, Y) {
//   let result = [];

//   for (let i = 0; i < Y.length; i++) {
//     for (let j = 0; j < X.length; j++) {
//       if (Y[i] === X[j]) {
//         result.push(X[j]);
//         // X에서 해당 문자를 제거하여 중복 처리
//         X = X.slice(0, j) + X.slice(j + 1);
//         break;
//       }
//     }
//   }
//   if (result.length === 0) return '-1';
//   if (result[0] === '0') return '0';
//   return result.sort((a, b) => b - a).join('');
// }

let X = '100';
let Y = '203045';

console.log(solution(X, Y));

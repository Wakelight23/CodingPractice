// 지표 번호	성격 유형
// 1번 지표	라이언형(R), 튜브형(T)
// 2번 지표	콘형(C),     프로도형(F)
// 3번 지표	제이지형(J), 무지형(M)
// 4번 지표	어피치형(A), 네오형(N)

// 선택지	성격 유형 점수
// 매우 비동의	네오형 3점
// 비동의	      네오형 2점
// 약간 비동의	네오형 1점
// 모르겠음	    어떤 성격 유형도 점수를 얻지 않습니다
// 약간 동의	  어피치형 1점
// 동의	        어피치형 2점
// 매우 동의	  어피치형 3점

// AI 최적화
function solution(survey, choices) {
  // 각 성격 유형의 점수를 저장할 객체
  let scores = { R: 0, T: 0, C: 0, F: 0, J: 0, M: 0, A: 0, N: 0 };

  // 설문 조사와 선택지 처리
  for (let i = 0; i < choices.length; i++) {
    let [type1, type2] = survey[i].split('');
    let choice = choices[i];

    if (choice < 4) {
      scores[type1] += 4 - choice; // 첫 번째 유형에 점수 추가
    } else if (choice > 4) {
      scores[type2] += choice - 4; // 두 번째 유형에 점수 추가
    }
  }

  // 각 지표에서 점수가 높은 성격 유형 선택
  let result = '';
  result += scores['R'] >= scores['T'] ? 'R' : 'T'; // 1번 지표
  result += scores['C'] >= scores['F'] ? 'C' : 'F'; // 2번 지표
  result += scores['J'] >= scores['M'] ? 'J' : 'M'; // 3번 지표
  result += scores['A'] >= scores['N'] ? 'A' : 'N'; // 4번 지표

  return result;
}

// // 내가 작성한 코드
// // 문제점 : result 정렬이 안됨
// function solution(survey, choices) {
//   let result = '';

//   for (let i = 1; i <= choices.length; i++) {
//     switch (choices[i]) {
//       case 1:
//         result += survey[i].split('')[0];
//         break;
//       case 2:
//         result += survey[i].split('')[0];
//         break;
//       case 3:
//         result += survey[i].split('')[0];
//         break;
//       case 4:
//         break;
//       case 5:
//         result += survey[i].split('')[1];
//         break;
//       case 6:
//         result += survey[i].split('')[1];
//         break;
//       case 7:
//         result += survey[i].split('')[1];
//         break;
//       default:
//         break;
//     }
//   }

//   result
//     .split('')
//     .sort((a, b) => (a !== 'R' || a !== 'T') - (b !== 'R' || b !== 'T') || a - b)
//     .join('');

//   return result;
// }

let survey = ['AN', 'CF', 'MJ', 'RT', 'NA'];
let choices = [5, 3, 2, 7, 5];

console.log(solution(survey, choices));

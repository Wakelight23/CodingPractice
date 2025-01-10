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
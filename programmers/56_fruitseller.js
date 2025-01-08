function solution(k, m, score) {
  let result = 0;

  // 점수를 내림차순으로 정렬
  score.sort((a, b) => b - a);

  // 상자를 만들 수 있는 최대 개수만큼 반복
  for (let i = 0; i < Math.floor(score.length / m); i++) {
    // 각 상자에서 최저 점수는 (i * m + m - 1) 번째 요소
    let boxMinScore = score[i * m + m - 1];
    result += boxMinScore * m;
  }

  return result;
}

let k = 4;
let m = 3;
// m = 3 이므로 [4, 4, 4] [4, 4, 4] [2, 2, 2] [2, 1, 1]
// 딱 배열의 개수가 12개로 나누어 떨어진다
// 1 * 3 * 4 = 12
let score = [4, 1, 2, 2, 4, 4, 4, 4, 1, 2, 4, 2];

console.log(solution(k, m, score));

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

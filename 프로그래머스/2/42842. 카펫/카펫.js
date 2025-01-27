function solution(brown, yellow) {
  const area = brown + yellow;

  for (let height = 1; height <= Math.sqrt(area); height++) {
    if (area % height === 0) {
      const width = area / height;

      // 노란색 격자 개수 조건 확인
      // '노란색으로 칠해져 있고 테두리 1줄은 갈색으로 칠해져 있는 격자 모양 카펫'
      if ((width - 2) * (height - 2) === yellow) {
        return [width, height]; // [가로, 세로] 반환
      }
    }
  }
}
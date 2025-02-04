function solution(n, a, b) {
  let round = 0;

  while (a !== b) {
    // 라운드 진행
    a = Math.ceil(a / 2);
    b = Math.ceil(b / 2);
    round++;
  }

  return round;
}
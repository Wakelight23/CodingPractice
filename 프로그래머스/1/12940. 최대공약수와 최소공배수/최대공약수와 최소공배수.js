function solution(n, m) {
  let answer = [];

  for (let i = 0; i < Math.max(n, m); i++) {
    if (m % i === 0 && n % i === 0) {
      answer[0] = Math.max(i);
    } else {
      answer[1] = (n * m) / answer[0];
    }
  }

  return answer;
}
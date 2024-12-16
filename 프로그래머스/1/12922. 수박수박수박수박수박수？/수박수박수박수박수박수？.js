function solution(n) {
  let word1 = '수';
  let word2 = '박';
  let result = '';

  for (let i = 0; i < n; i++) {
    i % 2 === 0 ? (result += word1) : (result += word2);
  }

  return result;
}
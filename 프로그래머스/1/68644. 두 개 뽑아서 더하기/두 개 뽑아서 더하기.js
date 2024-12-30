function solution(numbers) {
  let result = [];
  let n = numbers.length;

  for (let i = 0; i < n - 1; i++) {
    for (let j = i + 1; j < n; j++) {
      result.push(numbers[i] + numbers[j]);
    }
  }

  const set = new Set(result);
  result = [...set].sort((a, b) => a - b);

  return result;
}
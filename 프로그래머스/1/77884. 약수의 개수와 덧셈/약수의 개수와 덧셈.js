function solution(left, right) {
  // left에서 right까지 범위 배열
  let arr1 = Array(right - left + 1)
    .fill(left)
    .map((left, right) => left + right);
  // 각 수마다 약수 개수 판별
  let result = 0;
  for (let i = 0; i < arr1.length; i++) {
    let count = 0;
    for (let j = 1; j < arr1[i]; j++) {
      if (arr1[i] % j === 0) {
        count++;
      }
    }
    if (count % 2 === 0) {
      result -= arr1[i];
    } else {
      result += arr1[i];
    }
  }

  return result;
}
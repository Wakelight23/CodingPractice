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

let left = 24;
let right = 27;

console.log(solution(left, right));

// console.log(
//   Array(right - left + 1)
//     .fill(left)
//     .map((left, right) => left + right),
// );

// 다른 사람 풀이
function solution2(left, right) {
  let answer = 0;
  for (let num = left; num <= right; num++) {
    if (num % Math.sqrt(num) === 0) {
      answer -= num;
    } else {
      answer += num;
    }
  }
  return answer;
}

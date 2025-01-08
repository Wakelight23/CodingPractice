// 경우의 수
// 배열을 주어졌을 때 3개의 수를 더해서 0이 나오면 count++
function solution(number) {
  let result = [];
  let n = number.length;

  for (let i = 0; i < n - 2; i++) {
    for (let j = i + 1; j < n - 1; j++) {
      for (let k = j + 1; k < n; k++) {
        if (number[i] + number[j] + number[k] === 0) {
          result++;
        }
      }
    }
  }

  return result;
}

let number = [-3, -2, 1, 0, 1, 2, 3];
console.log(solution(number));

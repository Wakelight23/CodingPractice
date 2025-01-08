function solution(a, b) {
  let result = 0;

  for (let i = 0; i < a.length; i++) {
    result += a[i] * b[i];
  }

  return result;
}

let a = [1, 2, 3, 4];
let b = [-3, -1, 0, 2];

console.log(solution(a, b));

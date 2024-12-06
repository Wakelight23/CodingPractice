function solution(x) {
  const digits = String(x).split("").map(Number);
  const sum = digits.reduce((acc, curr) => acc + curr, 0);
  return x % sum === 0;
}

let x = 111;

console.log(solution(x));

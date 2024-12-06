function solution(n) {
  return +String(n)
    .split("")
    .sort((a, b) => b - a)
    .join("");
}

let n = 118372;

console.log(solution(n));

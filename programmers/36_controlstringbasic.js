function solution(s) {
  if (s.length === 4 || s.length === 6) {
    return /^\d+$/.test(s);
  }
  return false;
}

let s = '152388';

console.log(solution(s));

// console.log(Number(s));

function solution(s) {
  let result = [];

  nums = s.split(' ');
  const max = Math.max(...nums);
  const min = Math.min(...nums);

  return min + ' ' + max;
}

let s = '-1 -1';
console.log(solution(s));

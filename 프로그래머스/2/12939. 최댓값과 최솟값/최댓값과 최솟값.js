function solution(s) {
  nums = s.split(' ');
  const max = Math.max(...nums);
  const min = Math.min(...nums);

  return min + ' ' + max;
}
function solution(arr) {
  return arr.length === 1 ? (arr = [-1]) : arr.filter((x) => x !== Math.min(...arr));
}

let arr = [10];
console.log(solution(arr));

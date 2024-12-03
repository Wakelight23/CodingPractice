function solution(n) {
  const tpyeofmap = (arg) => Number(arg);
  return Array.from(String(n).split("").reverse(), tpyeofmap);
}

let n = 12345;

console.log(solution(n));
// console.log(String(n).split("").reverse());

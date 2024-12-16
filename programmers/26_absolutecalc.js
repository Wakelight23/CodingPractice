function solution(absolutes, signs) {
  let result = 0;

  for (let i = 0; i < absolutes.length; i++) {
    signs[i] === true ? (result += absolutes[i]) : (result -= absolutes[i]);
  }
  return result;
}

let absolutes = [4, 7, 12];
let signs = [true, false, true];

console.log(solution(absolutes, signs));

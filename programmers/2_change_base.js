function solution(n) {
  let answer;

  answer = n.toString(3);
  answer = answer.split("").reverse().join("");
  answer = parseInt(answer, 3);

  return answer;
}

console.log(solution(55));

// let str1 = "2001";

// console.log(str1.split("").reverse().join(""));

// Programmers 1등 풀이
// const solution = (n) => {
//     return parseInt([...n.toString(3)].reverse().join(""), 3);
// }

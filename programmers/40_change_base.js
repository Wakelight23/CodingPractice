function solution(n) {
  let answer;

  answer = n.toString(3);
  answer = answer.split("").reverse().join("");
  answer = parseInt(answer, 3);

  return answer;
}

console.log(solution(55));

function solution(numbers) {
  var answer = 0;
  let allnumbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  let difference = allnumbers.filter((x) => !numbers.includes(x));

  for (let i = 0; i < difference.length; i++) {
    answer += difference[i];
  }

  return answer;
}
function solution(numbers) {
  let sum = 0;

  let result;
  numbers.forEach((num) => {
    sum += num;
  });

  result = sum / numbers.length;
  return Math.floor(result) + 0.5 == result ? result : Math.floor(result);
}

console.log(solution([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

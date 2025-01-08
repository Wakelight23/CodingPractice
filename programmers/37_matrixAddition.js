function solution(arr1, arr2) {
  let answer = [];
  for (let i = 0; i < arr1.length; i++) {
    let row = [];
    for (let j = 0; j < arr1[i].length; j++) {
      row.push(arr1[i][j] + arr2[i][j]);
    }
    answer.push(row);
  }
  return answer;
}

let arr1 = [
  [1, 2],
  [2, 3],
];
let arr2 = [
  [3, 4],
  [5, 6],
];

console.log(solution(arr1, arr2));

// console.log(arr1[0][0] + arr2[0][0]);

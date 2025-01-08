// 배열 array의 i번째 숫자부터 j번째 숫자까지 자르고 정렬했을 때, k번째에 있는 수를 구하려 합니다
// array = [1, 5, 2, 6, 3, 7, 4], i = 2, j = 5, k = 3
// i ~ j = [5, 2, 6, 3] -> sort -> [2, 3, 5, 6] -> k = 3 -> return 5
// command 입력으로 여러 결과값 도출 가능 : [[2, 5, 3], [4, 4, 1], [1, 7, 3]]...
// return 해서 나온 값들은 각 배열마다 k번째 값 [5, 6, 3]
function solution(array, commands) {
  let result = [];

  for (let i = 0; i < commands.length; i++) {
    let numi = commands[i].slice(0, 1);
    let numj = commands[i].slice(1, 2);
    let numk = commands[i].slice(2, 3);

    let slice_arr = array.slice(numi - 1, numj);

    slice_arr.sort((a, b) => a - b);

    result.push(slice_arr[numk - 1]);
  }

  return result;
}

let array = [1, 5, 2, 6, 3, 7, 4];
let commands = [
  [2, 5, 3],
  [4, 4, 1],
  [1, 7, 3],
];

console.log(solution(array, commands));

// console.log(commands[1].slice(2, 3));

// 가로 세로의 길이를 구하는 데
// 4개의 명함이 있다면 4개의 명함 중 가로가 가장 긴 것, 세로가 가장 긴 것을 찾아서 넓이 계산
function solution(wallet) {
  let sizes = [0, 0];

  for (let i = 0; i < wallet.length; i++) {
    // sizes[0] = 가로 sizes[1] = 세로
    // 만약에 가로 길이가 세로길이보다 길면
    // 만약에 가장 큰 세로 길이가 가로 길이보다 작다면 눕힌다
    if (wallet[i][0] < wallet[i][1]) {
      [wallet[i][0], wallet[i][1]] = [wallet[i][1], wallet[i][0]];
    }
    sizes[0] = Math.max(sizes[0], wallet[i][0]);
    sizes[1] = Math.max(sizes[1], wallet[i][1]);
  }

  return sizes[0] * sizes[1];
}

console.log(
  solution([
    [10, 7],
    [12, 3],
    [8, 15],
    [14, 7],
    [5, 15],
  ])
);

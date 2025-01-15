// 해시맵을 사용하여 시간 복잡도 개선 코드
function solution(players, callings) {
  console.time(); // 실행시간 체크
  // 선수의 현재 위치를 저장하는 해시맵 생성
  const playerMap = new Map();

  // 초기 순위 저장
  players.forEach((player, index) => {
    playerMap.set(player, index);
  });

  for (let name of callings) {
    const currentIdx = playerMap.get(name);
    const frontPlayer = players[currentIdx - 1];

    // 맵에서 위치 교환
    playerMap.set(name, currentIdx - 1);
    playerMap.set(frontPlayer, currentIdx);

    // 배열에서 위치 교환
    [players[currentIdx], players[currentIdx - 1]] = [players[currentIdx - 1], players[currentIdx]];
  }
  console.timeEnd(); // 실행시간 체크
  return players;
}

// // 초기 시간 복잡도를 고려하지 않은 코드
// function solution(players, callings) {
//   for (let name of callings) {
//     const idx = players.indexOf(name);
//     if (idx > 0) {
//       // 현재 위치의 선수와 앞 선수의 위치를 교체
//       [players[idx], players[idx - 1]] = [players[idx - 1], players[idx]];
//     }
//   }
//   return players;
// }

let players = ['mumu', 'soe', 'poe', 'kai', 'mine'];
let callings = ['kai', 'kai', 'mine', 'mine'];
console.log(solution(players, callings));

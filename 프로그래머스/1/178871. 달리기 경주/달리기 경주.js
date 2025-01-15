function solution(players, callings) {
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
  
  return players;
}
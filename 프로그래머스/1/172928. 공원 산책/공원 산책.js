function solution(park, routes) {
  // 시작 위치 S 찾기
  let x = 0;
  let y = 0;
  for (let i = 0; i < park.length; i++) {
    for (let j = 0; j < park[0].length; j++) {
      if (park[i][j] === 'S') {
        // 시작 위치를 찾았으면 x와 y를 업데이트
        x = i;
        y = j;
        // 찾았으니 break로 반복문 나오기
        break;
      }
    }
  }

  // 방향별 이동 정의
  const directions = {
    N: [-1, 0], // 북 정의
    S: [1, 0], // 남 정의
    W: [0, -1], // 서 정의
    E: [0, 1], // 동 정의
  };

  // 위에서 방향별 이동 정의를 사용해서 routes의 명령 확인
  for (let route of routes) {
    // ex) let routes = ['E 2', 'S 3', 'W 1'];
    const [direction, distance] = route.split(' '); // [direction = 'E', distance = '2']
    // 시작위치 가져오기
    let nx = x;
    let ny = y;
    let canMove = true; // 이동했는가?

    // 이동 가능 여부 확인
    for (let i = 0; i < Number(distance); i++) {
      nx += directions[direction][0];
      ny += directions[direction][1];

      // park 배열을 벗어나는 경우
      if (nx < 0 || nx >= park.length || ny < 0 || ny >= park[0].length) {
        // 배열을 벗어났으므로 움직이지 않음
        canMove = false;
        break;
      }

      // 장애물을 만나는 경우
      if (park[nx][ny] === 'X') {
        // 장애물을 만났을 때도 움직이지 않음
        canMove = false;
        break;
      }
    }

    // 이동이 가능한 경우에만 위치 업데이트
    if (canMove) {
      x = nx;
      y = ny;
    }
  }

  return [x, y];
}
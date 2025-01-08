// n 은 배열 방의 개수 ex) n = 8 : allsection = n.length;
// m은 false인 방을 true로 만드는 데 m의 수 만큼 연속된 방을 true로 만든다
// section은 false인 방을 정하는 배열
function solution(n, m, section) {
  let wall = new Array(n).fill(true); // 모든 벽을 칠해진 상태(true)로 초기화

  // section에 있는 벽을 칠해지지 않은 상태(false)로 표시
  section.forEach((s) => (wall[s - 1] = false));

  let count = 0; // 페인트칠 횟수

  for (let i = 0; i < n; i++) {
    if (!wall[i]) {
      // 칠해지지 않은 벽을 발견하면
      // m 길이만큼 페인트칠
      for (let j = i; j < Math.min(i + m, n); j++) {
        wall[j] = true;
      }
      count++; // 페인트칠 횟수 증가
      i += m - 1; // 다음 칠해지지 않은 벽으로 이동
    }
  }

  return count;
}

let n = 8;
let m = 4;
let section = [2, 3, 6];

console.log(solution(n, m, section));

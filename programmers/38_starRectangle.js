process.stdin.setEncoding('utf8');
process.stdin.on('data', (data) => {
  // 입력값을 공백으로 나누어 n과 m 추출
  const [n, m] = data.split(' ').map(Number);

  // 가로 길이 n만큼 별(*) 생성
  const row = '*'.repeat(n);

  // 세로 길이 m만큼 해당 줄(row)을 출력
  for (let i = 0; i < m; i++) {
    console.log(row);
  }
});

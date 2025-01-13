function solution(wallpaper) {
  // 최소값과 최대값을 초기화 (최소값은 무한대, 최대값은 음의 무한대로 설정)
  let minRow = Infinity; // lux (최소 행)
  let minCol = Infinity; // luy (최소 열)
  let maxRow = -Infinity; // rdx (최대 행)
  let maxCol = -Infinity; // rdy (최대 열)

  // 바탕화면 배열을 반복하며 '#'의 좌표를 찾는다
  wallpaper.forEach((row, rowIndex) => {
    for (let colIndex = 0; colIndex < row.length; colIndex++) {
      if (row[colIndex] === '#') {
        // '#'이 발견되면 최소, 최대 좌표를 업데이트
        minRow = Math.min(minRow, rowIndex); // 최소 행 갱신
        minCol = Math.min(minCol, colIndex); // 최소 열 갱신
        maxRow = Math.max(maxRow, rowIndex); // 최대 행 갱신
        maxCol = Math.max(maxCol, colIndex); // 최대 열 갱신
      }
    }
  });

  // 드래그 시작점과 끝점을 포함하는 좌표
  return [minRow, minCol, maxRow + 1, maxCol + 1];
}

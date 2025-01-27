function solution(brown, yellow) {
  const area = brown + yellow;

  for (let height = 1; height <= Math.sqrt(area); height++) {
    if (area % height === 0) {
      const width = area / height;

      // 노란색 격자 개수 조건 확인
      // '노란색으로 칠해져 있고 테두리 1줄은 갈색으로 칠해져 있는 격자 모양 카펫'
      if ((width - 2) * (height - 2) === yellow) {
        return [width, height]; // [가로, 세로] 반환
      }
    }
  }
}

// 약수를 구해서 중간 값을 구하면 될 줄 알았는데 아닌 듯 하다
/*
고려하지 못한 점 : 
- '노란색으로 칠해져 있고 테두리 1줄은 갈색으로 칠해져 있는 격자 모양 카펫'
- 노란색은 가운데에 몰려있고 그 테두리에 갈색 격자가 있는 방식의 카펫이다
- 문제는 이를 명시하고 있음
*/
function solution2(brown, yellow) {
  let result = [];
  let area = brown + yellow;
  let index = 1;

  while (index <= area) {
    if (area % index === 0) result.push(index);
    index++;
  }

  if (result.length % 2 === 0) {
    result = [result[result.length / 2], result[result.length / 2 - 1]];
  } else {
    result = [result[Math.floor(result.length / 2)], result[Math.floor(result.length / 2)]];
  }

  return result;
}

let brown = 8;
let yellow = 1;
console.log(solution(brown, yellow));

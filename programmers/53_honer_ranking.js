// score = 점수
// k = 상위 n명
// result = 상위 n명 중 최하위
function solution(k, score) {
  let result = [];
  let ranking = [];
  for (let i = 0; i < score.length; i++) {
    // 현재 점수를 랭킹 배열에 추가
    ranking.push(score[i]);
    // 랭킹 배열을 오름차순으로 정렬
    ranking.sort((a, b) => a - b); // ranking.sort(function(a, b) { return a - b; })
    // 랭킹 배열의 길이가 k를 초과하면 가장 낮은 점수 제거
    if (ranking.length > k) {
      ranking.shift();
    }
    // 현재 랭킹 배열에서 가장 낮은 점수를 결과에 추가
    result.push(ranking[0]);
  }

  return result;
}

let score = [10, 100, 20, 150, 1, 100, 200];
let score2 = [100, 10, 1, 150, 20, 100, 200];
console.log(solution(3, score));

// let min = Math.min.apply(null, score);
// console.log(Math.min(min));

// console.log(
//   score.sort(function (a, b) {
//     return b - a;
//   })
// );

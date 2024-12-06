// 배열 안에 1, 2, 3, 1이 연속으로 들어가 있는 수를 찾는 문제
// 처음 1, 2, 3, 1이 성립되면 ingredient 배열에서 제외
// [2, 1, 1, 2, 3, 1, 2, 3, 1]의 예시가 있을 때 처음 반복문 실행 시
// [2, 1, 2, 3, 1] 이 남는다
// 다시 반복문 실행 시 [2]만 남고 더 이상 count 될 것이 없으므로 반복 끝
// 해당 배열이 존재하면 count++
function solution(ingredient) {
  const hamburger = [1, 2, 3, 1];
  let count = 0;
  hamburgerLength = hamburger.length;

  for (let i = 0; i <= ingredient.length - hamburgerLength; i++) {
    if (
      ingredient.slice(i, i + hamburgerLength).join("") === hamburger.join("")
    ) {
      ingredient.splice(i, hamburgerLength);
      i -= hamburgerLength;
      count++;
    }
  }

  return count;
}

let ingredient = [2, 1, 1, 2, 3, 1, 2, 3, 1];
console.log(solution(ingredient));

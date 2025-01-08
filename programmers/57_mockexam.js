// function solution(answers, tester) {
//   let ranking = [];
//   let count = 0;
//   for (let i = 0; i < answers.length; i++) {
//     if (answers[i] === tester[i]) {
//       count += 1;
//     }
//   }
//   ranking.push(count);

//   return ranking.sort((a, b) => a - b);
// }

// let a = [1, 2, 3, 4, 5];
// let t1 = [1, 3, 3, 2, 4];
// let t2 = [2, 2, 3, 4, 4];
// let t3 = [1, 2, 3, 4, 5];

// console.log(solution(a, t2));

// 정답 코드
function solution(answers) {
  const patterns = [
    [1, 2, 3, 4, 5], // 1번 수포자 패턴
    [2, 1, 2, 3, 2, 4, 2, 5], // 2번 수포자 패턴
    [3, 3, 1, 1, 2, 2, 4, 4, 5, 5], // 3번 수포자 패턴
  ];

  const scores = [0, 0, 0]; // 각 수포자의 점수를 저장할 배열

  // 각 문제에 대해 정답과 수포자의 답안을 비교
  for (let i = 0; i < answers.length; i++) {
    patterns.forEach((pattern, index) => {
      if (answers[i] === pattern[i % pattern.length]) {
        scores[index]++;
      }
    });
  }

  const maxScore = Math.max(...scores); // 가장 높은 점수 찾기

  // 가장 많은 문제를 맞힌 수포자를 찾고 오름차순으로 정렬하여 반환
  return scores.reduce((result, score, index) => {
    if (score === maxScore) {
      result.push(index + 1);
    }
    return result;
  }, []);
}

// 테스트 예시
console.log(solution([1, 2, 3, 4, 5])); // 예상 출력: [1]
console.log(solution([1, 3, 2, 4, 2])); // 예상 출력: [1,2,3]

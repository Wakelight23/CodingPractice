// cards1 배열과 cards2 배열을 조합해서 goal의 배열과 일치하도록 만들기
// 단, 순서가 바뀌어서는 안 된다
// goal과 일치하다면 Yes, 조합을 해도 나오지 않는다면 No
function solution(cards1, cards2, goal) {
  let index1 = 0;
  let index2 = 0;

  // goal 배열에 index번째 단어를 word와 비교
  for (let word of goal) {
    // index1이 cards1.length 랑 같아질 때까지 반복
    // word와 card1[index1]이 같다면 index1 증가
    if (index1 < cards1.length && word === cards1[index1]) {
      index1++;
      // index2가 cards2.length 랑 같아질 때까지 반복
      // word와 card1[index2]가 같다면 index2 증가
    } else if (index2 < cards2.length && word === cards2[index2]) {
      index2++;
      // 하나라도 index가 증가하지 않으면 goal 배열과 다름으로 No
    } else {
      return "No";
    }
    // 모든 index가 추가되면 goal의 배열과 같다고 판단함으로 Yes
  }

  return "Yes";
}

let cards1 = ["i", "drink", "water"];
let cards2 = ["want", "to"];
let goal = ["i", "want", "to", "drink", "water"];

console.log(solution(cards1, cards2, goal));

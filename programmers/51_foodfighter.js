// [1, 5, 9, 2] 예시가 있을 때
// 0번째 음식은 1개밖에 없음으로 pass
// 1번째 음식은 5개 있지만 2명이서 푸드 파이터를 하기 때문에 4개만 쓰고 Pass
// 2번째 음식은 9개 있지만 2명이서 푸드 파이터를 하기 때문에 8개만 쓰고 Pass
// 3번째 음식은 2개 있음으로 1개씩 먹고 Pass
// 모든 배열이 끝나면 가장 나중에 들어온 '3' 옆에 0 추가
function solution(food) {
  // food 는 배열임
  let result = "";
  let arr1 = [];
  let arr2 = [];
  for (let i = 1; i < food.length; i++) {
    let count = Math.floor(food[i] / 2);
    for (let j = 0; j < count; j++) {
      arr1.push(i);
      arr2.unshift(i);
    }
  }
  result = arr1.join("") + 0 + arr2.join("");
  return result;
}

let example = ["1", "3", "3", "3", "3"];
let a = 1;
// console.log(example.indexOf("3"));
console.log(solution(example));

// for (let i = 1; i < food.length; i++) {
//     if (food[i] > 1 && food[i] % 2 != 0) {
//       food[i] -= 1;
//     }
//     for (let j = food[i] / 2; j < food[i]; j++) {
//       if (food[i] > 1) {
//         arr1.unshift(food.indexOf(food[i]));
//         arr2.push(food.indexOf(food[i]));
//       }
//     }
//   }
//   arr1.reverse();
//   arr2.reverse();
//   result = arr1.join("") + 0 + arr2.join("");

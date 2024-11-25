// 2016년 1월 1일은 금요일
// 2016년 a월 b일은 무슨 요일인가
function solution(a, b) {
  return ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"][
    new Date(`2016-${a}-${b}`).getDay()
  ];
}

let a = 5;
let b = 29;

console.log(solution(a, b));

// console.log(new Date(`2016-2-31`).getDate());

// 2016년 1월 1일은 금요일
// 2016년 a월 b일은 무슨 요일인가
function solution(a, b) {
  const day = ["FRI", "SAT", "SUN", "MON", "TUE", "WED", "THU"];
  const date = new Date(2016, a - 1, b);
  return day[date.getDay()];
}

let a = 2;
let b = 30;

// console.log(solution(a, b));

console.log(new Date(`2016-2-31`).getDate());

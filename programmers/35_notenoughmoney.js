// 결과 : price = 3, money = 20, count = 4, result = 10
function solution(price, money, count) {
  for (let i = 1; i <= count; i++) {
    money -= price * i;
  }

  return money >= 0 ? 0 : Math.abs(money);
}

let price = 5;
let money = 15;
let count = 1;

console.log(solution(price, money, count));

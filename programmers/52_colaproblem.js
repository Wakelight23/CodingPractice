// 콜라 a개를 가져다주면 콜라 b병을 준다
// 빈병 n개를 가져다주면 몇 병을 받을 수 있는가
// 예시 입출력 : 20개 중 18개를 교환했더니 6병을 받는다 => 20-18+6 = 8
// 예시 입출력 : 나머지2+6=8개 중 6개를 교환했더니 6병을 받는다 => 8-6+2 = 4
// 예시 입출력 : 나머지2+2=4개 중 3개를 교환했더니 1병을 받는다 => 4-3+1 = 2
// 3번의 교환 동안 6+2+1=9병의 콜라를 받았다
function solution(a, b, n) {
  // a = 빈병, b = 되돌려주는 콜라, n = 보유 빈병
  let sum = 0;

  while (n >= a) {
    let ebottles = Math.floor(n / a) * b;
    sum += ebottles;
    n = (n % a) + ebottles;
  }

  return sum;
}

console.log(solution(4, 1, 20));

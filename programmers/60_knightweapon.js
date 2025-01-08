// number = 약수를 구할 범위
// limit = 구한 약수의 개수 제한
// power = 곱할 수
// AI 최적화 코드
function solution(number, limit, power) {
  let totalWeight = 0;

  // number 수만큼 배열 생성
  for (let n = 1; n <= number; n++) {
    let divisorsCount = 0;

    // 약수 개수 계산
    for (let i = 1; i * i <= n; i++) {
      if (n % i === 0) {
        divisorsCount++; // i는 약수
        if (i !== n / i) {
          divisorsCount++; // n / i도 약수
        }
      }
    }

    // 제한 적용 = limit 
    if (divisorsCount > limit) {
      totalWeight += power;
    } else {
      totalWeight += divisorsCount;
    }
  }

  return totalWeight;
}

let number = 10;
let limit = 3;
let power = 2;

console.log(solution(number, limit, power));
// 내가 짠 코드
// function solution(number, limit, power) {
//   let result = 0;
//   let numbers = [];
//   let primes = [];

//   for (let n = 1; n <= number; n++) {
//     numbers.push(n);
//   }

//   for (let i = 0; i < number; i++) {
//     let prime = [];
//     let index = 1;
//     while (index <= numbers[i] / 2) {
//       if (numbers[i] % index === 0) prime.push(index);
//       index++;
//     }
//     prime = [...prime, numbers[i]];
//     primes.push(prime.length);
//     if (primes[i] <= limit) {
//       result += prime.length;
//     }
//   }

//   return result;
// }

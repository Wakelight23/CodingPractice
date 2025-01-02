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
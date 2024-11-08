function solution(n, m) {
  let answer = [];

  for (let i = 0; i < Math.max(n, m); i++) {
    if (m % i === 0 && n % i === 0) { // 최대공약수
      answer[0] = Math.max(i);
    } else {
      answer[1] = (n * m) / answer[0]; // 최소공배수
    }
  }

  return answer;
}

console.log(solution(5, 3));

// Programmers 1등 풀이

function gcdlcm(a, b) {
  var r;
  for (var ab = a * b; (r = a % b); a = b, b = r) {}
  return [b, ab / b];
}

console.log(gcdlcm(5, 3));

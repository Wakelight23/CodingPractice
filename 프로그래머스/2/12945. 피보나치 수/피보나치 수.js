function solution(n) {
  if (n === 0) return 0; // F(0) 처리

  let num1 = 0; // F(0)
  let num2 = 1; // F(1)

  for (let i = 2; i <= n; i++) {
    const next = (num1 + num2) % 1234567;
    num1 = num2;
    num2 = next;
  }

  return num2;
}
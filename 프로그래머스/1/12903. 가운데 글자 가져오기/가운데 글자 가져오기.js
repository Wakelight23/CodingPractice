function solution(s) {
  return s.length % 2 === 0
    ? String(
        s
          .split('')
          .splice(s.length / 2 - 1, 2)
          .join(''),
      )
    : String(s.split('').splice(s.length / 2, 1));
}
function solution(s) {
  if (s.length % 2 === 0) {
    return String(
      s
        .split('')
        .splice(s.length / 2 - 1, 2)
        .join(''),
    );
  } else {
    return String(s.split('').splice(s.length / 2, 1));
  }
}

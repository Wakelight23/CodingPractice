function solution(s) {
  let result = [];
  let sArr = s.split(' ');

  for (let i = 0; i < sArr.length; i++) {
    if (sArr[i]) {
      result.push(sArr[i][0].toUpperCase() + sArr[i].slice(1).toLowerCase());
    } else {
      result.push('');
    }
  }

  return result.join(' ');
}
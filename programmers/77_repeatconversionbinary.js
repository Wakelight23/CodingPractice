// return 해야할 값 : 이진변환 횟수, 0개의 제거 횟수
// ex) return = [3, 8]
function solution(s) {
  let countConversion = 0;
  let countDel0 = 0;

  while (s !== '1') {
    const removedZeros = s.split('').filter((char) => char === '0').length;
    countDel0 += removedZeros;

    s = s.replace(/0/g, '').length.toString(2);

    countConversion++;
  }

  return [countConversion, countDel0];
}

let s = '110010101001';
console.log(solution(s));

// console.log(filtered_s.filter((char) => char !== '0').length.toString(2));

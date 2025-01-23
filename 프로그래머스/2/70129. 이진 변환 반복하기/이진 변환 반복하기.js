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
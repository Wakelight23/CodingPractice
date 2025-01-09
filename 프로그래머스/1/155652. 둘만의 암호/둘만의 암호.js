function solution(s, skip, index) {
  let result = [];
  let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
  
  // skip에 있는 알파벳 제외
  alphabet = alphabet.filter(char => !skip.includes(char));

  // s의 각 알파벳을 변환
  for (let char of s) {
    let currentIndex = alphabet.indexOf(char);
    let newIndex = (currentIndex + index) % alphabet.length;
    result.push(alphabet[newIndex]);
  }

  return result.join('');
}
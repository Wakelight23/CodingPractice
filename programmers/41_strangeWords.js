function solution(s) {
  // 우선 문자열을 공백 기준으로 나눔
  const words = s.split(' ');

  // 그 다음 각 단어를 처리하여 변환
  const changeWords = words.map((word) => {
    // map 사용
    // 스프레드 연산자를 사용하여 변경된 char를 업데이트
    return (
      [...word]
        // char, index로 key value 값 설정
        .map((char, index) => {
          // 삼항 연산자 사용 => index가 짝수인가?
          // 짝수라면 index번째 char를 대문자로
          // 홀수라면 index번째 char를 소문자로
          return index % 2 === 0 ? char.toUpperCase() : char.toLowerCase();
        })
        // 나누어졌던 문자들 다시 합치기
        .join('')
    );
  });

  // 마지막으로 변환된 단어들을 다시 공백으로 연결
  return changeWords.join(' ');
}

let s = 'try hello world';
console.log(solution(s));

// console.log(s.split(' ')[0][0].toUpperCase());

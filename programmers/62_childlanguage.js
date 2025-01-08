// 11개월 조카가 4가지의 단어만 말할 수 있음
// aya, ye, woo, ma 만 말할 수 있으며 연속된 단어는 말하지 못함 예) yeye
// 조카가 발음할 수 있는 단어 aya, ye, woo, ma
function solution(babbling) {
  let result = 0;
  const words = ['aya', 'ye', 'woo', 'ma'];

  // current에 현재 babbling의 상태 저장
  for (let i = 0; i < babbling.length; i++) {
    let current = babbling[i];
    let isValid = true;

    // 연속된 같은 발음이 있는지 확인하기 위해 이전 단어를 저장
    let prevWord = '';

    // current의 length가 0보다 크거나 isValid가 true일 때 반복문 종료
    while (current.length > 0 && isValid) {
      let found = false;

      // words의 단어들을 반복
      for (let j = 0; j < words.length; j++) {
        // startsWith에 대한 설명 ▼
        // String 값의 메서드로, 어떤 문자열의 문자로 시작하는지 확인하여 결과를 적절하게 true 혹은 false로 반환합니다.
        if (current.startsWith(words[j])) {
          // 같은 발음이 연속되면 유효하지 않음
          if (prevWord === words[j]) {
            isValid = false;
            break;
          }

          // 단어를 잘라내고 이전 단어 업데이트
          // words에 단어를 찾아내다면 found를 true 처리
          // 연속된 단어 체크를 위해 prevWord에 현재 words 저장
          current = current.slice(words[j].length);
          prevWord = words[j];
          found = true;
          break;
        }
      }
      
      if (!found) {
        isValid = false;
      }
    }

    if (isValid && current.length === 0) {
      result++;
    }
  }

  return result;
}

let babbling = ['ayaye', 'uuu', 'yeye', 'yemawoo', 'ayaayaa'];

console.log(solution(babbling));

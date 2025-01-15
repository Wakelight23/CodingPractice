function solution(today, terms, privacies) {
  let result = [];

  function calcDateWithLimit(baseDate, monthsToAdd) {
    // 새로운 Date 객체 생성
    let newDate = new Date(baseDate);

    // 월 추가
    newDate.setMonth(newDate.getMonth() + monthsToAdd);

    // 28일 제한
    if (newDate.getDate() > 28) {
      newDate.setDate(28);
    }

    // YYYY-MM-DD 형식으로 변환
    const year = newDate.getFullYear();
    const month = (newDate.getMonth() + 1).toString().padStart(2, '0');
    const day = newDate.getDate().toString().padStart(2, '0');

    return `${year}-${month}-${day}`;
  }

  function changeFormDate(baseDate) {
    let newDate = new Date(baseDate);
    // YYYY-MM-DD 형식으로 변환
    const year = newDate.getFullYear();
    const month = (newDate.getMonth() + 1).toString().padStart(2, '0');
    const day = newDate.getDate().toString().padStart(2, '0');

    return `${year}-${month}-${day}`;
  }

  for (let i = 0; i < privacies.length; i++) {
    let months = 0;
    for (let j = 0; j < terms.length; j++) {
      if (terms[j].split(' ')[0] === privacies[i].split(' ')[1]) {
        months = Number(terms[j].split(' ')[1]);
      }
    }
    if (changeFormDate(today) >= calcDateWithLimit(privacies[i].split(' ')[0], months)) {
      result.push(i + 1); // 인덱스는 1부터 시작하도록 조정
    }
  }

  return result;
}
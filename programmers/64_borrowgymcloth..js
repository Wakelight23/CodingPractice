// n = 전체 학생 수, lost = 체육복이 없는 학생의 배열, reserve = 체육복이 있는 학생의 배열
// 체육복을 가지고 있는 학생에게는 여벌이 존재해서 양 옆의 학생들에게만 빌려줄 수 있음
// 단, i-1 학생에 빌려줬을 경우 i+1학생에게는 빌려주지 못함
// => lost[i-1], lost[i+1]
function solution(n, lost, reserve) {
  let students = new Array(n).fill(1); // 모든 학생이 체육복 1개씩은 가지고 있다

  // 체육복을 없는 학생 처리
  // students에 --을 함으로써 배열에서 0인 배열은 체육복이 없는 학생으로 판단
  lost.forEach((student) => students[student - 1]--);

  // 여벌 체육복이 있는 학생 처리
  // students에 ++을 함으로써 배열에서 2인 배열은 여벌 체육복이 있는 학생으로 판단
  reserve.forEach((student) => students[student - 1]++);

  for (let i = 0; i < n; i++) {
    if (students[i] === 0) {
      // 앞 번호 학생에게 빌리기
      // 체육복이 2개인 경우
      if (i > 0 && students[i - 1] > 1) {
        students[i]++;
        students[i - 1]--;
      }
      // 뒷 번호 학생에게 빌리기
      // 체육복이 2개인 경우
      else if (i < n - 1 && students[i + 1] > 1) {
        students[i]++;
        students[i + 1]--;
      }
    }
  }

  // 체육복이 1개 이상인 학생 수 세기
  // 여벌 체육복이 없어도 1인 학생은 자신의 체육복을 가지고 있음으로 count
  return students.filter((s) => s > 0).length;
}

let n = 5;
let lost = [2, 4];
let reserve = [3];

console.log(solution(n, lost, reserve));

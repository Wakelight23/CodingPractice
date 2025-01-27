// 신입사원 무지는 게시판 불량 이용자를 신고하고 처리 결과를 메일로 발송하는 시스템을 개발하려 합니다.
/*
각 유저는 한 번에 한 명의 유저를 신고할 수 있습니다.
  - 신고 횟수에 제한은 없습니다. 서로 다른 유저를 계속해서 신고할 수 있습니다.
  - 한 유저를 여러 번 신고할 수도 있지만, 동일한 유저에 대한 신고 횟수는 1회로 처리됩니다.
k번 이상 신고된 유저는 게시판 이용이 정지되며, 해당 유저를 신고한 모든 유저에게 정지 사실을 메일로 발송합니다.
  - 유저가 신고한 모든 내용을 취합하여 마지막에 한꺼번에 게시판 이용 정지를 시키면서 정지 메일을 발송합니다.
*/
function solution(id_list, report, k) {
  let result = [];
  // remportMap :
  // countMap : 신고 횟수
  // map으로 만들기
  let reportMap = new Map();
  let countMap = new Map();

  // 중복 신고 제거
  report = [...new Set(report)];

  // 신고 데이터를 Map에 저장
  report.forEach((r) => {
    const [reporter, reported] = r.split(' ');

    // 신고자별 신고한 사람 목록
    if (!reportMap.has(reporter)) {
      reportMap.set(reporter, new Set());
    }
    reportMap.get(reporter).add(reported);

    // 신고받은 횟수 카운트
    countMap.set(reported, (countMap.get(reported) || 0) + 1);
  });

  // 정지된 계정 목록 생성
  const bannedIds = new Set(
    // countMap에서 reported에 대한 횟수 체크
    // count가 신고 받은 횟수보다 높으면 메일을 보내기 위해 id에 저장
    [...countMap.entries()].filter(([, count]) => count >= k).map(([id]) => id),
  );

  // 각 사용자가 받을 메일 수 계산
  return id_list.map((id) => {
    // reportMap에 id가 존재하지 않으면 0
    if (!reportMap.has(id)) return 0;
    // k번 신고당한 사람이 밴되었다는 것을 알림 받기 위해 메일을 받아야 하는 사람
    // 문제에서 요구한 result의 값
    return [...reportMap.get(id)].filter((reported) => bannedIds.has(reported)).length;
  });
}

let report = ['muzi frodo', 'apeach frodo', 'frodo neo', 'muzi neo', 'apeach muzi']; // 신고자 : 신고 받은 사람
let id_list = ['muzi', 'frodo', 'apeach', 'neo']; // 전체 ID 목록
let k = 2; // 이 수 만큼 신고를 받으면 계정 정지

console.log(solution(id_list, report, k));

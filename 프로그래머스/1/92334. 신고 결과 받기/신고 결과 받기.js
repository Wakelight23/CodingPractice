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
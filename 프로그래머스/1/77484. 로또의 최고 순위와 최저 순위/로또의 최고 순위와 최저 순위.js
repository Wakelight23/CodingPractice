function solution(lottos, win_nums) {
  let result = [];
  let wrost = 0;
  let best = 0;

  // 최저 순위
  for (let i = 0; i < lottos.length; i++) {
    for (let j = 0; j < win_nums.length; j++) {
      if (lottos[i] === win_nums[j]) {
        wrost++;
      }
    }
  }

  if (wrost === 6) {
    result.push(1);
  } else if (wrost === 5) {
    result.push(2);
  } else if (wrost === 4) {
    result.push(3);
  } else if (wrost === 3) {
    result.push(4);
  } else if (wrost === 2) {
    result.push(5);
  } else {
    result.push(6);
  }

  // 최고 순위
  for (let i = 0; i < lottos.length; i++) {
    for (let j = 0; j < win_nums.length; j++) {
      if (lottos[i] === 0) {
        lottos[i] = win_nums[j];
      }

      if (lottos[i] === win_nums[j]) {
        best++;
      }
    }
  }

  // 로또 순위
  if (best === 6) {
    result.unshift(1);
  } else if (best === 5) {
    result.unshift(2);
  } else if (best === 4) {
    result.unshift(3);
  } else if (best === 3) {
    result.unshift(4);
  } else if (best === 2) {
    result.unshift(5);
  } else {
    result.unshift(6);
  }

  return result;
}
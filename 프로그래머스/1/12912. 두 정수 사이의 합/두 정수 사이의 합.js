function solution(a, b) {
  var answer = 0;
  let lowernum = [a, b];
  lowernum.sort((a, b) => a - b);

  for (lowernum[0]; lowernum[0] <= lowernum[1]; lowernum[0]++) {
    answer += lowernum[0];
  }

  return answer;
}
let str1 = ["abce", "abcd", "cdx"];
console.log(solution(str1, 1));

function solution(strings, n) {
  let result = [];

  for (let i = 0; i < strings.length; i++) {
    strings[i] = strings[i][n] + strings[i];
  }

  strings.sort();

  for (let j = 0; j < strings.length; j++) {
    strings[j] = strings[j].replace(strings[j][0], "");
    result.push(strings[j]);
  }

  return result;
}

// let a = ["abce", "abcd", "cdx"];
// let n = 1;

// for (let i = 0; i < a.length; i++) {
//   a[i] = a[i][n] + a[i];
// }
// console.log(a);

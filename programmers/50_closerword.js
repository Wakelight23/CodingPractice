function solution(s) {
  let result = [];
  let arr1 = [];
  for (let i = 0; i < s.length; i++) {
    if (!arr1.includes(s[i])) {
      result.push(-1);

      arr1.push(s[i]);
    } else if (arr1.includes(s[i])) {
      result.push(i - arr1.lastIndexOf(s[i]));
      arr1.push(s[i]);
    }
  }
  return result;
}

console.log(solution("banana"));

// let a = "banana";
// console.log(a.indexOf("a", 4));

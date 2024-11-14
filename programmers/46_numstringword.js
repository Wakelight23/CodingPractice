// 1478 → "one4seveneight"
// 234567 → "23four5six7"
// 10203 → "1zerotwozero3"

function solution(s) {
  const strArr = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ];
  const numArr = ["0", "1", " 2", "3", "4", "5", "6", "7", "8", "9"];

  if (s.search("zero") != null || s.search("zero") == 0)
    s = s.replace("zero", "");
  if (s.search("0") != null || s.search("0") == 0) s = s.replace("0", "");
  for (let i = 0; i <= 50; i++) {
    if (s.search(strArr[i]) != null) s = s.replace(strArr[i], numArr[i]);
  }

  return Number(s);
}

console.log(solution("10000zero12threethree4444five"));

//   for (let i = 0; i < numArr.length; i++) {
//   let arr = result.split(numArr[i]);
//   result = arr.join(i);
// }

// let num = [
//     ("0", "zero"),
//     ("1", "one"),
//     ("2", "two"),
//     ("3", "three"),
//     ("4", "four"),
//     ("5", "five"),
//     ("6", "six"),
//     ("7", "seven"),
//     ("8", "eight"),
//     ("9", "nine"),
//   ];

// const numArray = {
//     num: [
//       { zero: "0" },
//       { one: "1" },
//       { two: "2" },
//       { three: "3" },
//       { four: "4" },
//       { five: "5" },
//       { six: "6" },
//       { six: "7" },
//       { eight: "8" },
//       { nine: "9" },
//     ],
//   };

//   result = s.replace("zero", "0");
//   result = s.replace("one", "1");
//   result = s.replace("two", "2");
//   result = s.replace("three", "3");
//   result = s.replace("four", "4");
//   result = s.replace("five", "5");
//   result = s.replace("six", "6");
//   result = s.replace("seven", "7");
//   result = s.replace("eight", "8");
//   result = s.replace("nine", "9");

//   if (s.search("one")) {
//     result = s.replace("one", "1");
//   } else if (s.search("two")) {
//     s.replace("two", "2");
//   }

//   const strArr = [
//     "zero",
//     "one",
//     "two",
//     "three",
//     "four",
//     "five",
//     "six",
//     "seven",
//     "eight",
//     "nine",
//   ];
//   const numArr = ["0", "1", " 2", "3", "4", "5", "6", "7", "8", "9"];

//   for (let i = 0; i <= 50; i++) {
//     if (s.search(strArr[i]) != null) s = s.replace(strArr[i], numArr[i]);
//   }

// if (s.search("zero") != null || s.search("zero") == 0)
//     s = s.replace("zero", "");
//   if (s.search("zero") != null) s = s.replace("zero", "0");
//   if (s.search("one") != null) s = s.replace("one", "1");
//   if (s.search("two") != null) s = s.replace("two", "2");
//   if (s.search("three") != null) s = s.replace("three", "3");
//   if (s.search("four") != null) s = s.replace("four", "4");
//   if (s.search("five") != null) s = s.replace("five", "5");
//   if (s.search("six") != null) s = s.replace("six", "6");
//   if (s.search("seven") != null) s = s.replace("seven", "7");
//   if (s.search("eight") != null) s = s.replace("eight", "8");
//   if (s.search("night") != null) s = s.replace("nine", "9");

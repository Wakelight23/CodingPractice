function solution(array, commands) {
  let result = [];

  for (let i = 0; i < commands.length; i++) {
    let numi = commands[i].slice(0, 1);
    let numj = commands[i].slice(1, 2);
    let numk = commands[i].slice(2, 3);

    let slice_arr = array.slice(numi - 1, numj);

    slice_arr.sort((a, b) => a - b);

    result.push(slice_arr[numk - 1]);
  }

  return result;
}
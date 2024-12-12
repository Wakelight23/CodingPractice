function solution(phone_number) {
  let result = '';
  let slicenum1 = phone_number.slice(0, phone_number.split('').length - 4);
  let slicenum2 = phone_number.slice(phone_number.split('').length - 4);

  return '*'.repeat(slicenum1.length) + slicenum2;
}
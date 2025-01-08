function solution(nums) {
  let count = 0;

  for (let i = 0; i < nums.length - 2; i++) {
    for (let j = i + 1; j < nums.length - 1; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        let sum = nums[i] + nums[j] + nums[k];
        if (isPrime(sum)) {
          count++;
        }
      }
    }
  }

  return count;
}

function isPrime(num) {
  if (num < 2) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}

let nums = [1, 2, 3, 4, 5];
console.log(solution(nums));

// function findPrimes(limit) {
//   const primes = [];
//   for (let num = 2; num <= limit; num++) {
//     let isPrime = true;

//     }
//     if (isPrime) {
//       primes.push(num);
//     }
//   }
//   return primes;
// }

// console.log(findPrimes());

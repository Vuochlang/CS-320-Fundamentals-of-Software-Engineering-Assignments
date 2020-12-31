/**
 * Function: primeGen(limit)
 * - This function takes a threshold number, and returns a list of prime numbers which are below that threshold.
 */
function primeGen(limit) {
  if (limit < 2) return [];
  let numberArray = [];

  switch (limit) { // self-initializing switch when the given limit is up to 5
    case 2:
      numberArray = [2];
      return numberArray;
    case 3:
      numberArray = [2, 3];
      return numberArray;
    case 4:
      numberArray = [2, 3];
      return numberArray;
    case 5:
      numberArray = [2, 3, 5];
      return numberArray;
    default:
  }

  if (limit > 5) {
    numberArray = [2, 3, 5];
    for (let k = 5; k <= limit; k += 2) { // initialize an array of odd numbers up to the given limit
      if (k % 6 === 1 || k % 6 === 5) { // rules to help reduce the non-prime number in the array
        if (k % 5 !== 0) {
          numberArray.push(k);
        }
      }
    }
    let currentPrimeNumber;
    const len = numberArray.length;
    for (let i = 1; i < len; i++) { // loop to go through array and eliminate non-prime number
      currentPrimeNumber = numberArray[i];
      if (currentPrimeNumber >= Math.sqrt(limit)) break;
      for (let j = i + 1; j < len; j++) {
        if (numberArray[j] % currentPrimeNumber === 0) {
          numberArray.splice(j, 1);
        }
      }
    }
  }
  return numberArray;
}

/**
 * Function: cumulativeSum(array)
 * - This function takes a list of numbers, and returns the cumulative sum of these numbers.
 */
function cumulativeSum(array) {
  let totalSum = 0;
  const arrayLen = array.length;// m
  const list = [];
  for (let m = 0; m < arrayLen; m++) {
    totalSum += array[m];
    list.push(totalSum);
  }
  return list;
}

/**
 * Function: maxPrimeSum(num)
 * - This function finds the the largest prime number (L) below the given prime (num)
 *    which has the longest sum of consecutive prime numbers that can be added up tp (L)
 */
function maxPrimeSum(num) {
  const primeNumberArray = primeGen(num);
  const lenPrime = primeNumberArray.length;
  let maxPrimeNum = 0;
  let maxLen = 0;

  for (let i = 0; i < lenPrime; i++) { // slicing prime-array into different lengths
    if (lenPrime - i < maxLen) break;
    const newPrimeArray = primeNumberArray.slice(i, lenPrime);
    const newLenPrime = newPrimeArray.length;
    const newSum = cumulativeSum(newPrimeArray);
    let limit = 0;
    for (let j = 0; j < newLenPrime; j++) {
      if (newSum[j] > num) {
        limit = j;
        break;
      }
    }
    for (let k = limit; k >= 0; k--) {
      const currentSum = newSum[k];
      for (let l = newLenPrime - 1; l >= 0; l--) {
        const currentPrime = newPrimeArray[l];
        if (currentSum > currentPrime) break;
        if (currentSum === currentPrime) {
          if (maxLen < k + 1 && maxPrimeNum < currentPrime) {
            maxPrimeNum = currentPrime;
            maxLen = k + 1;
          }
        }
      }
    }
  }
  return ([maxPrimeNum, maxLen]);
}

console.log(maxPrimeSum(100));
console.log(maxPrimeSum(1000));
console.log(maxPrimeSum(10000));
console.log(maxPrimeSum(100000));

/*
* Optimizations:
* --> function primeGen(limit)
*     > add a switch for self initialize prime number if the given <limit> is under or equal to 5
*     > add more rules when initializing an array of integers to reduce the number into less than half
*       of the original length
*          _ in the initializing loop:
*             > only generate odd numbers because 2 is the only even number for prime
*             > only adding <num> number to the array if <num>%6=1 or <num>%6=5 and <num>%5!=0
* --> function maxPrimeSum(num)
*     > completely changed the algorithm from primefunction.js
*  --description--
*       " I use a loop to keep generating new prime-number-array with different starting points. In the loop,
*         first I find the new cumulative-sum-array from that new prime-number-array, and use a loop to go
*         through the cumulative-sum-array and find the index where its value is greater than the given <num>.
*         After I know the index, I use one outer loop to start with that index downward and an inner loop to
*         start with the length of the new prime-number-array downward as well. By comparing their values in the loop,
*         it will find the maxPrimeSum and the maxLen of that new prime-number-array.
*         The whole process will keep repeating until it breaks from its rule or it reaches the limit, and,
*         the maxPrimeSum and maxLen will keep changing when there are new greater values."
*  --algorithms--
*     > using a loop to work with different length of the prime-number-array that has been generated
*     > use .slice() to section the array starting from 0 with its original length, until it breaks from the loop
*     > each times when running in the loop:
*             > new-prime-array will be generated along with new-cumulative-sum-array
*             > then use another loop to go through the new-cumulative-sum-array and break when it's greater than <num>
*             > by knowing where to stop, use another loop to start from that stopping point - <cumulativeSum>
*             > use another loop to start from the last index of the new-prime-array - <newPrime>
*             > break out of the previous loop when <newPrime> is less than <cumulativeSum>
*             > or, set the value of maxPrimeSum and maxLen when both are equal and we have found larger values for both
*/

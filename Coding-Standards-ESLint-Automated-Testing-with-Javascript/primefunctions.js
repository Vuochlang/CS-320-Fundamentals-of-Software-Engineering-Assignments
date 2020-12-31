/**
 * Function: primeGen(limit)
 * - This function takes a threshold number, and returns a list of prime numbers which are below that threshold.
 */
function primeGen(limit) {
  const numberArray = [];
  for (let k = 0; k < limit; k++) { // initialize the array to the given limit
    numberArray.push(k + 1);
  }
  for (let i = 1; i < numberArray.length; i++) { // loop to go through array and eliminate non-prime number
    const currentPrimeNumber = numberArray[i];
    for (let j = i + 1; j < numberArray.length; j++) {
      if (numberArray[j] % currentPrimeNumber === 0) {
        numberArray.splice(j, 1);
      }
    }
  }
  numberArray.shift(); // remove the 1 at the beginning of the array
  return numberArray;
}

/**
 * Function: cumulativeSum(array)
 * - This function takes a list of numbers, and returns the cumulative sum of these numbers.
 */
function cumulativeSum(array) {
  let totalSum = 0;
  const list = [];
  for (let m = 0; m < array.length; m++) {
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
  const result = [];
  let testArray = [];
  let sum = 0;
  let maxPrimeNum = 0;
  let len = 0; // length of consecutive primes that adds up to maxPrimeSum

  for (let n = 0; n < primeNumberArray.length; n++) {
    const currentPrime = primeNumberArray[n];
    const tempArray = primeNumberArray.filter(function (value) { return value <= primeNumberArray[n]; });

    for (let a = -1; a < tempArray.length; a++) {
      testArray = [];
      sum = 0;
      for (let b = a + 1; b < tempArray.length; b++) {
        testArray.push(tempArray[b]);
        sum = cumulativeSum(testArray).pop();
        if (sum > currentPrime) break;
        if (sum === currentPrime && len < testArray.length) {
          maxPrimeNum = currentPrime;
          len = testArray.length;
        }
      }
    }
  }
  result.push(maxPrimeNum);
  result.push(len);
  return result;
}

console.log(primeGen(100));
console.log(cumulativeSum(primeGen(50)));
console.log(maxPrimeSum(100));
console.log(maxPrimeSum(1000));
// console.log(maxPrimeSum(10000));

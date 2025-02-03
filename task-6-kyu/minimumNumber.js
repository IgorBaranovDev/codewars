// https://www.codewars.com/kata/5a946d9fba1bb5135100007c/train/javascript

function minimumNumber(numbers) {
  const sum = numbers.reduce((acc, num) => acc + num, 0);

  if (isPrime(sum)) {
    return 0;
  }

  const nextPrime = findNextPrime(sum);
  return nextPrime - sum;
}

function isPrime(n) {
  if (n < 2) return false;
  if (n === 2) return true;
  if (n % 2 === 0) return false;

  for (let i = 3; i <= Math.sqrt(n); i += 2) {
    if (n % i === 0) return false;
  }

  return true;
}

function findNextPrime(sum) {
  let nextPrime = sum;
  while (!isPrime(nextPrime)) {
    nextPrime++;
  }
  return nextPrime;
}

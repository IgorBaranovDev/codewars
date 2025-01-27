// https://www.codewars.com/kata/550498447451fbbd7600041c/train/javascript

function compArraySquare(array1, array2) {
  if (!array1 || !array2 || array1.length !== array2.length) return false;
  const array1Squared = array1.map((x) => x * x).sort((a, b) => a - b);
  const array2Sorted = array2.sort((a, b) => a - b);

  return array1Squared.every((item, index) => item === array2Sorted[index]);
}


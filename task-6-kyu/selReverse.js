// https://www.codewars.com/kata/58f6000bc0ec6451960000fd/train/javascript

function selReverse(array, length) {
  const arrayLength = array.length;

  if (arrayLength <= length) return array.reverse();
  if (length === 0) return array;

  const resArr = [];

  for (let i = 0; i < arrayLength; i += length) {
    const partOfArray = array.slice(i, i + length);
    resArr.push(...partOfArray.reverse());
  }
  return resArr;
}


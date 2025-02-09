// https://www.codewars.com/kata/5a430359e1ce0e35540000b1/train/javascript

function averageLength(array) {
  const average = Math.round(
    array.reduce((acc, item) => acc + item.length, 0) / array.length
  );
  return array.map((item) => item.charAt(0).repeat(average));
}

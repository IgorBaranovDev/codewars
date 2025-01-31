// https://www.codewars.com/kata/52a112d9488f506ae7000b95/train/javascript

function isIntArray(arr) {
  if (!Array.isArray(arr)) {
    return false;
  }

  if (arr.length === 0) {
    return true;
  }

  return arr.every((i) => {
    if (typeof i !== "number" || isNaN(i)) {
      return false;
    }

    return i === Math.floor(i);
  });
}


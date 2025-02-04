// https://www.codewars.com/kata/583af10620dda4da270000c5/train/javascript

const mergeArrays = (a, b) =>
  a
    .reduce((acc, item, index) => {
      acc.push(item);
      if (b[index] !== undefined) acc.push(b[index]);
      return acc;
    }, [])
    .concat(b.slice(a.length));


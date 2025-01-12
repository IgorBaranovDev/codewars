// https://www.codewars.com/kata/59ca8e8e1a68b7de740001f4/train/javascript

function solve(a, b) {
  const res = [];
  for (const strB of b) {
    const count = a.filter((strA) => strA === strB).length;
    res.push(count);
  }
  return res;
}

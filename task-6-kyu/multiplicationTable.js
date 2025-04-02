// https://www.codewars.com/kata/534d2f5b5371ecf8d2000a08/train/javascript

function multiplicationTable(size) {
  const res = [];

  for (let i = 1; i <= size; i++) {
    const row = Array.from({ length: size }, (_, j) => i + j * i);
    res.push(row);
  }
  return res;
}

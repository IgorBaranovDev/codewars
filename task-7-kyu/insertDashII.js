function insertDashII(num) {
  const arr = num.toString().split("");

  const res = arr.map((item, index) => {
    if (item === 0 || +arr[index + 1] === 0) {
      return item;
    } else if (item % 2 === 1 && arr[index + 1] % 2 === 1) {
      return `${item}-`;
    } else if (item % 2 === 0 && arr[index + 1] % 2 === 0) {
      return `${item}*`;
    } else return item;
  });

  return res.join("");
}

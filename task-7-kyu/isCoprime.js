const isCoprime = (x, y) => {
  function helper(number) {
    const arr = [];
    for (let i = 1; i <= number; i++) {
      if (number % i === 0) {
        arr.push(number / i);
      }
    }
    arr.pop();
    return arr;
  }

  let arrayX = helper(x);
  let arraY = helper(y);
  console.log(arrayX, arraY);
  let matches = arrayX.filter((item) => arraY.indexOf(item) > -1);
  return !matches.length > 0;
};

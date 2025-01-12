// https://www.codewars.com/kata/56311e4fdd811616810000ce/train/javascript

function List() {
  this.countSpecDigits = function (integersList, digitsList) {
    const countArray = Array(10).fill(0);

    for (const integer of integersList) {
      Math.abs(integer)
        .toString()
        .split("")
        .forEach((digit) => countArray[parseInt(digit)]++);
    }

    return digitsList.map((digit) => [digit, countArray[digit]]);
  };
}

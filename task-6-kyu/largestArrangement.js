// https://www.codewars.com/kata/59d902f627ee004281000160/train/javascript
const largestArrangement = (array) => {
  const strArray = array.map(String);

  strArray.sort((a, b) => {
    const order1 = a + b;
    const order2 = b + a;
    return order2.localeCompare(order1);
  });

  if (strArray[0] === "0") {
    return "0";
  }

  return +strArray.join("");
};

// https://www.codewars.com/kata/59547688d8e005759e000092/train/javascript

function distributionOf(golds) {
  let first = 0;
  let second = 0;
  let left = 0;
  let right = golds.length - 1;
  let isTurn = true;

  while (left <= right) {
    let chosenPile;

    if (golds[left] >= golds[right]) {
      chosenPile = golds[left];
      left++;
    } else {
      chosenPile = golds[right];
      right--;
    }

    isTurn ? (first += chosenPile) : (second += chosenPile);

    isTurn = !isTurn;
  }

  return [first, second];
}


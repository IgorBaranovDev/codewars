// https://www.codewars.com/kata/563f960e3c73813942000015/train/javascript

function getBestWord(points, words) {
  const letters = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];
  let bestIndex = 0;
  let bestScore = -Infinity;
  let bestLength = Infinity;

  for (let i = 0; i < words.length; i++) {
    const word = words[i];

    const score = word.split("").reduce((acc, item) => {
      return acc + points[letters.indexOf(item)];
    }, 0);

    if (
      score > bestScore ||
      (score === bestScore && word.length < bestLength)
    ) {
      bestScore = score;
      bestLength = word.length;
      bestIndex = i;
    }
  }

  return bestIndex;
}

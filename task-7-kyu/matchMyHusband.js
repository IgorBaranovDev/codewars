// https://www.codewars.com/kata/5750699bcac40b3ed80001ca/train/javascript

function matchMyHusband(usefulness, months) {
  const usefulnessAll = usefulness.reduce((acc, i) => i + acc, 0);

  const decayRate = Math.log(1 - 0.15);

  const needs = 100 * Math.exp(decayRate * months);

  return usefulnessAll >= needs ? "Match!" : "No match!";
}

// https://www.codewars.com/kata/563b662a59afc2b5120000c6/train/javascript

function nbYear(p0, percent, aug, p, countYears = 0) {
  if (p0 >= p) {
    return countYears;
  }
  const newPopulation = p0 + (p0 * percent) / 100 + aug;
  return nbYear(newPopulation, percent, aug, p, countYears + 1);
}


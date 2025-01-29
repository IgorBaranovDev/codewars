// https://www.codewars.com/kata/571d2e9eeed4a150d30011e7/train/javascript

function scoreboard(whoAteWhat) {
  const res = [];
  for (const player of whoAteWhat) {
    let scoreCurr =
      player.chickenwings * 5 + player.hamburgers * 3 + player.hotdogs * 2;
    res.push({ name: player.name, score: scoreCurr });
  }

  return res.sort((a, b) => {
    if (b.score !== a.score) {
      return b.score - a.score;
    } else {
      return a.name.localeCompare(b.name);
    }
  });
}


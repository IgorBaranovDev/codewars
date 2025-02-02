// https://www.codewars.com/kata/57f6051c3ff02f3b7300008b/train/javascript

function meeting(x, need) {
  if (need === 0) return "Game On";

  const chairsTaken = [];
  let totalChairs = 0;

  for (const room of x) {
    const [occupants, chairs] = room;
    const spareChairs = Math.max(0, chairs - occupants.length);
    const chairsToTake = Math.min(spareChairs, need - totalChairs);
    chairsTaken.push(chairsToTake);
    totalChairs += chairsToTake;
    if (totalChairs >= need) break;
  }

  return totalChairs < need ? "Not enough!" : chairsTaken;
}

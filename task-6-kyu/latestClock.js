// https://www.codewars.com/kata/58925dcb71f43f30cd00005f/train/javascript

function latestClock(a, b, c, d) {
  const arrOfDigits = [a, b, c, d];
  let latestTime = "00:00";

  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
      if (i === j) continue;
      for (let m = 0; m < 4; m++) {
        if (m === i || m === j) continue;
        for (let p = 0; p < 4; p++) {
          if (p === i || p === j || p === m) continue;

          const hours = parseInt(`${arrOfDigits[i]}${arrOfDigits[j]}`, 10);
          const minutes = parseInt(`${arrOfDigits[m]}${arrOfDigits[p]}`, 10);

          if (hours < 24 && minutes < 60) {
            const currentTime = `${String(hours).padStart(2, "0")}:${String(
              minutes
            ).padStart(2, "0")}`;

            if (currentTime > latestTime) {
              latestTime = currentTime;
            }
          }
        }
      }
    }
  }
  return latestTime;
}


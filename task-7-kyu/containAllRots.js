// https://www.codewars.com/kata/5700c9acc1555755be00027e/train/javascript

function containAllRots(strng, arr) {
  if (strng === "") return true;

  const rotations = [];
  for (let i = 0; i < strng.length; i++) {
    const rotation = strng.slice(i) + strng.slice(0, i);
    rotations.push(rotation);
  }

  for (const rotation of rotations) {
    if (!arr.includes(rotation)) {
      return false;
    }
  }

  return true;
}

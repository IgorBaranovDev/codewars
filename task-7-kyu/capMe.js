// https://www.codewars.com/kata/5356ad2cbb858025d800111d/train/javascript

const capMe = (names) =>
  names.map(
    (word) => word.charAt(0).toUpperCase() + word.toLowerCase().slice(1)
  );


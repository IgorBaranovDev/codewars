// https://www.codewars.com/kata/577d5ce442a8d81e790002b2/train/javascript

function validName(array) {
  if (array.length === 0) return "You must test at least one name.";
  if (array.length === 1)
    return "Congratulations, you can choose any name you like!";

  for (let i = 1; i < array.length; i++) {
    const previousName = array[i - 1];
    const currentName = array[i];
    const lastLetterPrevious =
      previousName[previousName.length - 1].toLowerCase();
    const firstLetterCurrent = currentName[0].toLowerCase();

    if (lastLetterPrevious !== firstLetterCurrent)
      return "Back to the drawing board, your baby names are not compatible.";
  }

  return "Congratulations, your baby names are compatible!";
}

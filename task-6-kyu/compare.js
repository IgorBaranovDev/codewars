// https://www.codewars.com/kata/55847fcd3e7dadc9f800005f/train/javascript

function compare(a, b) {
  if (a === null && b === null) return true;

  if (a === null || b === null) return false;

  if (a.val !== b.val) return false;

  return compare(a.left, b.left) && compare(a.right, b.right);
}

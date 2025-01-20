// https://www.codewars.com/kata/5acc79efc6fde7838a0000a0/train/javascript

const search = (n, root) => {
  if (!root) return null;
  if (root.value === n) return root;
  return search(n, root.left) || search(n, root.right);
};

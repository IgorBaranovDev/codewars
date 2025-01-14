// https://www.codewars.com/kata/5800580f8f7ddaea13000025/train/javascript

function sumTheTreeValues(root) {
  if (!root) return 0;

  const rootValue = root.value;
  const left = sumTheTreeValues(root.left);
  const right = sumTheTreeValues(root.right);

  return rootValue + left + right;
}

{
  const sumTheTreeValues = (root) =>
    root
      ? root.value + sumTheTreeValues(root.left) + sumTheTreeValues(root.right)
      : 0;
}

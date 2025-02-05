// https://www.codewars.com/kata/55fb6537544ae06ccc0000dc/train/javascript

function summaryRanges(nums) {
  const res = [];
  let start = nums[0];

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === nums[i + 1]) continue;

    if (nums[i] + 1 !== nums[i + 1]) {
      start === nums[i]
        ? res.push(`${start}`)
        : res.push(`${start}->${nums[i]}`);
      start = nums[i + 1];
    }
  }

  return res;
}

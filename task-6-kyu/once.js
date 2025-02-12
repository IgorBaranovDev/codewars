// https://www.codewars.com/kata/5307ff5b588fe6d7000000a5/train/javascript

function once(fn) {
  let called = false;
  return function (...args) {
    if (!called) {
      called = true;
      return fn(...args);
    }
  };
}

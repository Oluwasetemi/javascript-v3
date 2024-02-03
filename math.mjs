console.log('Hello from math.js');

// js
// exports.PI = 22/7;
// mjs
export const PI = 22/7;
// exports.METHOD = () => {
//   console.log('Hello from math.js');
// };

export const random = () => {
  return Math.random();
};

// Math.max
export const max = (arr) => {
  console.log(arr);
  console.log(typeof arr);
  console.log(Array.isArray(arr));
  return Math.max(...arr);
}


const math = {
  add: (a, b) => {
    return a + b;
  },
  sub: (a, b) => {
    return a - b;
  },
};

// js (require js)
// module.exports = math;
// es6 (import/export) mjs
export default math;

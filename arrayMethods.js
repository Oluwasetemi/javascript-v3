let numbers = [1, 2, 3, 4, 5]
let fruits = ['apple', 'banana', 'cherry', 'durian', 'eggfruit', 'apple']

const double = x => x * x;
const add5 = x => x + 5;

let res = numbers.map(double).map(add5); // [6, 9, 14, 21, 30]
console.log(res)

const summation = (value, index) => value + index;

let sum = numbers.map(summation);
console.log(sum)
const filterEven = value => value % 2 === 0;
const filterOdd = value => value % 2 === 1;
let even = numbers.filter(filterEven);
let odd = numbers.filter(filterOdd);
console.log(odd)

// count the fruits
const callfunction = (prev, curr,currindex, array) => {
  console.log(prev, curr, currindex, array)
  // prev[curr] = 1
  if (prev[curr]) {
    // prev[curr] = prev[curr] + 1
    prev[curr] += 1
  } else {
    prev[curr] = 1
  }
  console.log(prev)
  return prev
}

let count = fruits.reduce(callfunction, {})
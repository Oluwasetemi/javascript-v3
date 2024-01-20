// Array manipulation using several methods like map, filter, reduce, toUpperCase, toLowercase, slice.





//array methods: map, toUpperCase and toLowerCase are used here to manipulate the array of names
//array of names
let names = ['judith', 'olumide']

//here we use map to callback the capitalize function to change the first letter of each name to uppercase
let capitalizedNames = names.map(Capitalize);
capitalizedNames
//expexted output will be ['Judith', 'Olumide']

//here we use map with an arrow and also use toUpperCase to change the names to change the names to uppercase 
let upperCasedNames = names.map(name => name.toUpperCase())
upperCasedNames
//expexted output will be ['JUDITH', 'OLUMIDE']

//this is the capitalize function that is called in the map method
//it takes in a string and returns the first letter of the string in uppercase and the rest in lowercase
function Capitalize(str) {
  let firstLetter = str[0];
  let rest = str.slice(1);
  return `${firstLetter.toUpperCase()}${rest.toLowerCase()}`;
}
console.log(Capitalize('jUDith'))


//here we work with an array of numbers and strings
let numbers = [1, 2, 3, 4, 5];

//this is an arrow funbction that takes in a number and returns the square of the number
const double = x => x * x;
const add5 = x => x + 5;//this arrow function adds 5 to the number

//here we apply the double function using map to the numbers array an use map again to apply the add5 function
let result = numbers.map(double).map(add5)
//expected output will be [6, 9, 14, 21, 30]




//here use use map, filter and reduce to manipulate the array of numbers and fruits

///array of numbers
let numbers = [1, 2, 3, 4, 5]
//array of fuits
let fruits = ['apple', 'banana', 'cherry', 'durian', 'eggfruit', 'apple']

//this is an arrow funbction that takes in a number and returns the square of the number
const double = x => x * x;
const add5 = x => x + 5;//this arrow function adds 5 to the number

//here we apply the double function using map to the numbers array an use map again to apply the add5 function
let res = numbers.map(double).map(add5); // [6, 9, 14, 21, 30]
console.log(res)

//we usee a custom function to map numbers array to an array that contains the sum of the value and index of each number
const summation = (value, index) => value + index;

let sum = numbers.map(summation);
console.log(sum)
//here we use filter method to filter out even and odd numbers from the numbers array
const filterEven = value => value % 2 === 0;
const filterOdd = value => value % 2 === 1;
let even = numbers.filter(filterEven);
let odd = numbers.filter(filterOdd);
console.log(odd)//output will be: [1, 3, 5]
console.log(even)//output will be: [2, 4]

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

//here we also use reduce to count the number of times each fruit appears in the fruits array
let count = fruits.reduce(callfunction, {})

// modules require, import and export
const axios = require('axios');

const url = 'https://jsonplaceholder.typicode.com/todos/1';

axios.get(url).then(response => {
  console.log(response.data);
})

function Person(name, age) {
  if (!new.target) {
    return new Person(name, age);
  }
  // const this = {}
  this.name = name;
  this.age = age;
  // return this;
}

const person = new Person('John de programmer', 30);
console.log(person);
const person2 = new Person('Jane de programmer', 21);
console.log(person2);
const ruth = Person('Adams Ruth', 99)
console.log(ruth);
// hoisting
Person.prototype.postOnTwitter = function() {
  console.log(`${this.name } always post whatever she is working on, on twitter`);
}
ruth.postOnTwitter()

// rest parameter and spread operators(object and array)
// rest parameter
function add(...rest) {
  // return a + b;
  console.log(typeof rest)
  Array.isArray(rest)
  console.log(rest);
  let sumRest = rest.reduce((acc, curr) => acc + curr, 0);
  sumRest
  return sumRest;
}

add(1, 3, 3, 5, 6)

let newPerson = {...person, fullName: 'John de programmer de souza', address: 'Lagos, Nigeria', age: 99, a: {x: {a: 1, b: 2}, y: 2}}
newPerson
let arrayOfScores = [1, 2, 3, 4, 5, 6, 7, 8, 9]
let newArrayOfScores = [...arrayOfScores, 10, 11, 12, 13, 14, 15]

const name = ["chima", "ojo", "temi"]
let newName = {...name}

// destructuring of variables {Object and Array}
// renaming:, deeper destructuring, default values=
let {name: firstName, age, fullName, address, a: { x: { a, b }, y } ,z = 99 } = newPerson


let {0: abc, 10: adebaba, ...qwerty} = newArrayOfScores
console.log(qwerty)

console.log('here')

// Object.keys, Object.values, Object.entries and Array.from()
Object.keys(newPerson)
Object.values(newPerson)
let [,,,twe] = Object.entries(newPerson)
twe
Array.from({ length: 4 }).map((val, index) => index + 1).sort((a, b) => a - b)


const surprisePackage = function (...fns) {
  console.log(fns)
  return function (input) {
    console.log(input)
    return fns.reduce(function(accFxn, currFxn) {
      console.log(accFxn)
      return currFxn(accFxn)
    }, input)
  }
}

const toUpperCase = str => str.toUpperCase()
const removeSpaces = str => str.replace(/\s/g, "")
const addExclamation = str => str + "!"
const finalBustop = str => str + " " + "final bustop"

let str = 'mr man please end the class like this we are having headache'

// finalBustop(addExclamation(removeSpaces(toUpperCase(str))))

let res99 = surprisePackage(finalBustop, removeSpaces, addExclamation, toUpperCase)(str)
res99
// prototypes manipulation
String.prototype.alt = 'another way'
String.prototype.altSchool = function() {
  return 'altSchool'
}

let name = 'oluwasetemi' // literal	1 - use constructor to construct a new variable, 2 - converts the constructed object to a primitive data type
// attach properties and methods to the new primitive data type
console.log(typeof name);

let ab = 'good'
console.log(ab.alt)
console.log(ab.altSchool())
console.log(name.capitalize())

String.prototype.capitalize = function() {
  const first = this.charAt(0).toUpperCase()
  const rest = this.slice(1)
  return first + rest
}


console.log(name.altSchool())
let a = 2;
// a.altSchool()
// contructors

// let button = new HTMLButtonElement()
// console.log(button)
// String, Number, Boolean, Array, Object, Function, Promise, RegExp, Date, Error etc

let now = new Date()
let before = new Date('2020-01-01')
let before2 = new Date(2020, 0, 1, 23, 59, 59, 999)
console.log(before2)
let err = new Error('this is an error')
console.log(err.stack)
console.log(now.getDate())

console.log(Math.PI)

// oven that makes bread
function Ojo(name) {
  // if (!new.target) {
  //   return new Ojo(name)
  // }
  // let this = {}
  // property
  this.name = name
  // method
  this.giveBirth = function(name) {
    console.log('give birth')
    console.log(name)
  }

  // return this
}

let bread1 = new Ojo('oluwasetemi')
console.log(bread1)

console.log(bread1 instanceof Ojo)

let whiteBread = new Ojo('white')
let agegeBread = new Ojo('agege')

// bread
const ojo = {
  name: 'oluwasetemi',
  giveBirth: function(name) {
    console.log('give birth')
    console.log(name)
  }
}

// copying shallow copy, deep copy JSON.parse(JSON.stringify(obj)), Object.assign({}, obj), spread operator, lodash, StructuredClone()


const setemi = new Ojo('oluwasetemi')

function add(a, b) {
  return a + b
}

// Closure - access to a closed varible during currying
function addTrouble(a) {
  // a is only supposed to be accessible within the scope of addTrouble
  // but because of closure, it is accessible to the returned function - closed variable
  return function(b) {
    return a + b
  }
}

console.log(add(1, 2))
console.log(addTrouble(10)(20))
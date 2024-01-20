let obj = {};
obj.name = 'setemi';
obj;
obj.age = 99;
obj;
obj.print = function () {
  console.log(obj.name);
  console.log(obj.age);
};
obj;

// function declaration
function name() {
  // body, statement
  // parameter - variables used within the function alone(local variable)
}

// function call - signature
name();

//
function add(num1, num2) {
  // truthy  and falsy values(0, '', false, null, undefined, NaN)
  if (!num1 || !num2) {
    console.log('I cannot be called');
    throw new Error('impossible');
  }

  // layer of defence
  if (typeof num1 === 'string' || typeof num2 === 'string') {
    console.log('I can only add numbers');
    // return
    throw new Error('impossible');
  }

  // num1 and num2
  // return is return (return the result of the operation and stop the execution of the function)
  let result = num1 + num2;
  return result;
}

let res = add(2, 2);
res;

// function expression - putting fxn dec;aration into a variable
let addExpression = function add(num1, num2) {
  // truthy  and falsy values(0, '', false, null, undefined, NaN)
  if (!num1 || !num2) {
    console.log('I cannot be called');
    throw new Error('impossible');
  }

  // layer of defence
  if (typeof num1 === 'string' || typeof num2 === 'string') {
    console.log('I can only add numbers');
    // return
    throw new Error('impossible');
  }

  // num1 and num2
  // return is return (return the result of the operation and stop the execution of the function)
  let result = num1 + num2;
  return result;
};

console.log(typeof addExpression);

// arrow function
let addArrow = (num1, num2) => {
  // truthy  and falsy values(0, '', false, null, undefined, NaN)
  if (!num1 || !num2) {
    console.log('I cannot be called');
    throw new Error('impossible');
  }

  // layer of defence
  if (typeof num1 === 'string' || typeof num2 === 'string') {
    console.log('I can only add numbers');
    // return
    throw new Error('impossible');
  }

  // num1 and num2
  // return is return (return the result of the operation and stop the execution of the function)
  let result = num1 + num2;
  return result;
};

// object basics
let objectD = {}

// dot notation
objectD.name = 'setemi';
objectD.age = 99;

// square bracket notation
objectD['job'] = 'instructor'
objectD

// delete property
delete objectD['job']
objectD

console.log(objectD.hasOwnProperty('name'))
console.log('age' in objectD)

let obj2 =  (name, age) => {
  let obj = {};
  obj[name] = name;
  obj.age = age

  return obj
}

let obj2OneLiner =  (name, age) => ({
  // property value shorthand
  name,
  age: age
})

console.log(obj2OneLiner('setemi', 99))
console.log(obj2('setemi', 99))



let obj3 = (age) => ({
  name, // property value shorthand
  age: age,
});

console.log(obj3('setemi', 99))

console.log(typeof addArrow);

// short arrowfxn -> oneliners
let addOneLiner = (num1, num2) =>
  num1 === undefined || num2 === undefined ? 'impossible' : num1 + num2;

const UpperCase = (name) => {
  return name.toUpperCase();
};
const result2 = UpperCase('setemi');
console.log(result2);
const LowerCase = (name) => name.toLowerCase();
const AddExclamation = (name) => name + '!';
const AddQuestion = (name) => name + '?';



let arr = [1, 2];
console.log(arr.length);
console.log(arr[0])
arr[2] = 99
console.log(arr[2])

// arr methods
// push, pop
// shift, unshift
// slice, splice
// concat, reverse,
// indexOf, lastIndexOf
// includes, join
// sort, map, filter, find, findIndex, forEach, at
// reduce

let summation = () => {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }

  return sum;
}

let sum = summation()
// (prev, curr, index, arr) => {

// }

const callMeBack = function (prev, curr, index, arr) {
console.log({prev, curr, index, arr})
  // return prev + curr
}
arr.reduce(callMeBack)

const takeWithYou = (msg) => msg ? console.log(msg) : console.log('morning')
takeWithYou()










let val = addOneLiner();
val;

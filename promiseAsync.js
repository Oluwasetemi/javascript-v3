// fallback
let name = undefined;
console.log(Boolean(name)); // undefined
const defaultName = 'default name';
let newName = name || 'qwerty';
console.log(newName); // adebabacac
let newName2 = name && defaultName;
console.log(newName2); // adebabacac

// undefined or null
// name === undefined || name === null ? defaultName : name
let newName3 = name ?? defaultName;
console.log(newName3); // adebabacac

// Promise
// two major way to create a promise
// 1. promise constructor
// create your promise
const promise = new Promise((res, rej) => {
  // res(5000)
  rej('broken fellow');
});
// return your promise in a fxn
function testProm() {
  return promise;
}
// consume your promise, call fxn and attach .then and .catch
testProm()
  .then((a) => {
    console.log(a);
  })
  .catch(function (err) {
    console.log(err);
  });

// Example to ease all our troubles
const lotteryGame = new Promise(function (resolve, reject) {
  console.log(`lottery is happening`);

  setTimeout(() => {
    let lottery = 0.2;

    console.log(lottery);

    if (lottery > 0.5) {
      resolve('You won 😆');
    } else {
      reject(new Error(`You lost 😣`));
    }
  }, 2000);
});

function lotteryTester() {
  return lotteryGame;
}

// lotteryTester()
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     // err.message
//     console.error(err.stack);
//     console.log(err.message);
//   })
//   .finally(() => {
//     console.log('I am done')
//   });

// 2. async function
function add(a, b) {
  return a + b
}

async function addPromise(a, b) {
  if (!b) {
    throw new Error('b is not defined')
  }
  return a + b
}

let res = add(2, 3)
console.log(res)

addPromise(2, 3).then(res => {
  console.log(res)
}).catch(err => {
  console.log(err.message)
});

// async function were to be used with await
// IIFE - Immediately Invoked Function Expression and try and catch
(async function sayTheTruth() {
  try {
    console.log('instant')
    // const data = await fetch('httpz://api.github.com/users/oluwasetemi')
    // const result = await data.json()
    // console.log(result.login)
    const res = await addPromise(2)
    console.log(res)
    // we can now use await
  }
  catch(err) {
    console.log(err.message || err)
  }
})()

let obj = {
  name: 'oluwasetemi',
  age: 20,
}

// contructors
function Person(name) {
  // let this = {}
  this.name = name
  // return this
}

const setemi = new Person('oluwasetemi')
console.log(setemi)

// classes
class Person2 {
  constructor(name) {
    this.name = name
  }
}

const setemi2 = new Person2('oluwasetemi')
console.log(setemi2)

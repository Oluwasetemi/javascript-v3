function p1() {
  return new Promise((resolve, reject) => {
    setTimeout(() => reject("Error in p1"), 1000);
  }).catch((error) => {
    console.error(error);
  })
}

function p2() {
  return new Promise((resolve) => {
    setTimeout(() => resolve("p2 resolved"), 1000);
  });
}

promise().

function pAll() {
  Promise.all([p2(), p1()])
    .then((results) => {
      console.log("All data resolved:", results);
    })
    .catch((error) => {
      console.error("Error resolving data:", error);
    });
}

let [res1, res2] = pAll();

const surprise = (...fns) => input => fns.reduce(
  (acc, fn) => fn(acc), input
)

const surprisePackage = function (...fns) {
  return function (input) {
    fns.reduce(function(accFxnAndDefaultValue, currFxn) {
      return currFxn(accFxnAndDefaultValue)
    }, input)
  }
}

surprisePackage(...fns)(input)

array.reduce(fxn)
array.reduce(fxn, default)
array.reduce(fxn, default, thisArg)

const toUpperCase = str => str.toUpperCase()
const removeSpaces = str => str.replace(/\s/g, "")
const addExclamation = str => str + "!"

let result = addExclamation("Subscribe to Bytes")
let result1 = removeSpaces(result)
let res = toUpperCase(result1)

let res = toUpperCase(removeSpaces(addExclamation("Subscribe to Bytes")))

console.log(res)


// fns(acc, curr) and input
// curr = fns[0]
// acc = input
// acc = curr(acc)
// curr = fns[1]
// acc = curr(acc)
// curr = fns[2]
// acc = curr(acc)
// curr = fns[3]
// acc = curr(acc)
// return acc



res = surprise(toUpperCase, removeSpaces, addExclamation)("Oluwasetemi Ojo is a Software Engineer")
console.log(res)

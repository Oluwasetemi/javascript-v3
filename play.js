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

function pAll() {
  Promise.all([p2(), p1()])
    .then((results) => {
      console.log("All data resolved:", results);
    })
    .catch((error) => {
      console.error("Error resolving data:", error);
    });
}

pAll();

const surprise = (...fns) => input => fns.reduce(
  (acc, fn) => fn(acc), input
)

const toUpperCase = str => str.toUpperCase()
const removeSpaces = str => str.replace(/\s/g, "")
const addExclamation = str => str + "!"

let res = toUpperCase(removeSpaces(addExclamation("Subscribe to Bytes")))

console.log(res)

res = surprise(toUpperCase, removeSpaces, addExclamation)("Oluwasetemi Ojo is a Software Engineer")
console.log(res)

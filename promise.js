//create a promise
const promise = new Promise(function(resolve, reject) {
  // resolve('I FIRED');
  reject(new Error('I DID NOT FIRE'));
})

function testPromise() {
  return promise.then(res => {
    console.log(res);
  }).catch(error => {
    console.log(error.message);
  })
}

testPromise();

// async function test() {
//   return 'hello world';
// }

// any normal function is turned to a promise if you append with async
async function testRejected() {
  throw new Error('REJECTED!');
}

// calling the testRejected function without using a promise
// IIFE - Immediately Invoked Function Expression
(async function() {
  try {
    const res = await testRejected();
    console.log(res);

  } catch(err) {
    console.log(err.message);
  }
}())




test().then(function (res){
  console.log(res);
})

function test() {
  return new Promise((resolve, reject) => {
    resolve('hello world');
  })
}

// function testRejected() {
//   return new Promise((resolve, reject) => {
//     throw new Error('REJECTED!');
//   })
// }

testRejected().catch(err => {
  console.log(err);
})


// create a promise
const sampleProm = new Promise(function(resolve, reject) {
  // either resolve or reject
  // resolve('hello world');
  reject('its crazy out here')
})
// put the promise in a function and return the promise
function testSampleProm() {
  return sampleProm
}
// call the function and use .then to handle the resolve and .catch to handle the reject
testSampleProm().then(function(res) {
  console.log(res);
}).catch(function(err) {
  console.log(err);
})


// contructors and prototypes
let obj = {
  name: 'john',
  age: 30,
  greet: function() {
    console.log('hello');
  }
}

// constructor
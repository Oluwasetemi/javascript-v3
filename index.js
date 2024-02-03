// const math = require('./math')
// const math = require('./math')
// const cowsay = require('cowsay')

// named import
// const { add, sub } = require('./math')

// default import
// const math = require('./math')

// console.log(add(10, 10))
// console.log(sub(10, 10))

// console.log(math.PI)
// console.log(math.random())

// console.log(math.max(1, 2, 3, 4, 5, 6, 7, 8, 9, 10))
// console.log(math)

// cowsay.think({
//   text: 'Hello world!',
//   y: true, // using y mode - youthful mode
// })
console.log('from index.js')
import math, { PI } from './math.js'

console.log(math.add)
console.log(math.sub)
console.log(PI)
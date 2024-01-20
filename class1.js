// variable declaration
// var, let, const
// var name = 'ojo'
var name;
console.log(name)
name = 'ojo';
console.log(name)
// console.log(window.name)
// scope

let age = 20;

const ceoInterpolated = `
adewale yussuf
${'ojo'.slice(1)}
adewale yussuf
adewale yussuf
adewale yussuf
adewale yussuf
`
console.log(ceoInterpolated)
// const ceo = 'hack sultan'

// data type
// primitive data type
// string, number, boolean, null, undefined, bigint, symbol

let fname = 'adewale';
let lname = 'yussuf';

let fullname = fname + ' ' + lname;
let fullname2 = `${fname} ${lname}`;
fullname2

// string '', "", ``

// number
let age2 = 20;
console.log(typeof age2)
let veryBigNumber = Number.MAX_VALUE;
let verySmallNumber = Number.MIN_VALUE;
console.log(veryBigNumber)
console.log(verySmallNumber)
console.log(BigInt(veryBigNumber) + BigInt(veryBigNumber))
let ageBigInt = 20n;
console.log(typeof ageBigInt)

// boolean
let isMale = true;
let isMermaid = false;
let ceo = 'jerry'
let isAdewaleCeo = ceo === 'adewale yussuf';
console.log(isAdewaleCeo)

let nothing = null;
console.log(typeof nothing) // TODO: why is it an object?

let tutor = undefined;
console.log(typeof tutor)

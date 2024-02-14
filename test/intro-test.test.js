// const {test, describe, expect} = require('jest/globals')

// unit test, integration test - jest, vitest - other(mochai, jasmine), end-to-end test - cypress, selenium, puppeteer, playright
// TDD - Test Driven Development

function add(a, b) {
  // if (typeof a !== 'number' || typeof b !== 'number') {
  //   throw new Error('a and b must be numbers');
  // }
  return a + b;
}

function sub(a, b) {
  return a - b;
}

if (add(3, 7) !== 10) {
  throw new Error('Expected 10 but got ' + add(3, 7));
}

console.log(add(1, 3));

// test('it should add 2 numbers together', () => {
//   const result = add(3, 7)
//   if (result !== 10) {
//     throw new Error('Expected 10 but got ' + result)
//   }
// })

// write ur own expect
function expect(actual) {
  return {
    toBe: (expected) => {
      if (actual !== expected) {
        throw new Error(`Expected ${expected} but got ${actual}`);
      }
    },
    toEqual: (expected) => {
      if (actual !== expected) {
        throw new Error(`Expected ${expected} but got ${actual}`);
      }
    },
    toHaveProperty: (prop) => {
      if (!actual.hasOwnProperty(prop)) {
        throw new Error(`Expected ${actual} to have property ${prop}`);
      }
    },
    toBeGreaterThan: (expected) => {
      if (actual <= expected) {
        throw new Error(`Expected ${actual} to be greater than ${expected}`);
      }
    },
    toHave: (expected) => {
      if (!actual.includes(expected)) {
        throw new Error(`Expected ${actual} to have ${expected}`);
      }
    }
  };
}

function test(title, callback) {
  try {
    callback();
    console.log(`✅ ${title} passed`);
  } catch (error) {
    console.log(`❌ ${title} failed`);
  }
}


function describe(title, callback) {
  callback();
}

describe('add', () => {
  test('it should add 2 numbers', () => {
    // assertion
    const obj = [1, 2, 3];
    expect(obj).toHave(4);
    // expect(add(3, 7)).toEqual(10)
  });

  // test('only 2 numbers must be passed to the add function', () => {
  //   expect(() => add(3, '7')).toThrow();
  // });
});

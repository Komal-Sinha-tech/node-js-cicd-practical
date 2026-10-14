
const assert = require('node:assert/strict');
const { add, subtract, multiply } = require('./app');

assert.equal(add(2, 3), 5);
assert.equal(subtract(8, 3), 5);
assert.equal(multiply(4, 3), 12);

console.log('All tests passed!');

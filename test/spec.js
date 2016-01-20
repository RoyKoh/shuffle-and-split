// assert is a node built-in
var assert = require('assert')
var shuffleAndSplit = require('../')
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
// assertion libraries either throw errors or not
// mocha runs the code, check if terminal shows hello
// console.log('hello')

// 1. mocha sets up test
// 2. run everything
// 3. then report

describe('shuffleAndSplit', function () {
  it('length of first array list should be 4', function () {
    // console.log('sup')
    // assert checks boolean true/false
    // assert (false)
    // assert(true)
    var countA = shuffleAndSplit(arr, 3)
    console.log(countA.length)
    var countA0 = countA[0]
    assert(countA0.length === 4)
  })
})

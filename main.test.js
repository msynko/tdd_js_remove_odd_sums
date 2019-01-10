const removeOddSum = require('./main.js');

test('', () => {
  const result = removeOddSum([ {a: 5, b: 5},
                                {a: 3, b: 4},
                                {a: 2, b: 0},
                                {a: 2, b: 1}],'a','b');

  expect(result).toEqual([{a: 5, b: 5}, {a: 2, b: 0}]);
});

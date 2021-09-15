const { test, expect } = require("@jest/globals");
const additiveInverse = require("./additiveInverse");

test("additiveInverse", function () {
  expect(additiveInverse([12, -7, -1, 3, 5])).toEqual([-12, 7, 1, -3, -5]);
  expect(additiveInverse([0, -3, 4, 1, 2])).toEqual([0, 3, -4, -1, -2]);
  expect(additiveInverse([-5, -25, 35])).toEqual([5, 25, -35]);
});

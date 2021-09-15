const { test, expect } = require("@jest/globals");
const existsHigherNumber = require("./existsHigherNumber");

test("existsHigherNumber", function () {
  expect(existsHigherNumber([8, 4, 20, 32, 1], 10)).toEqual(true);
  expect(existsHigherNumber([1, 3, 7, 4, 6], 8)).toEqual(false);
  expect(existsHigherNumber([], 1)).toEqual(false);
});

const { test, expect } = require("@jest/globals");
const growUpNumber = require("./growUpNumber");

test("growUpNumber", function () {
  expect(growUpNumber(5)).toEqual([5, 4, 3, 2, 1, 0]);
  expect(growUpNumber(3)).toEqual([3, 2, 1, 0]);
  expect(growUpNumber(0)).toEqual([]);
});

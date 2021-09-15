const { test, expect } = require("@jest/globals");
const isPalindrome = require("./isPalindrome");

test("isPalindrome", function () {
  expect(isPalindrome("kakak")).toBe(true);
  expect(isPalindrome("adik")).toBe(false);
  expect(isPalindrome("sos")).toBe(true);
  expect(isPalindrome("lawak")).toBe(false);
});

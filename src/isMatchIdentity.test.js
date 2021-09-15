const { test, expect } = require("@jest/globals");
const isMatchIdentity = require("./isMatchIdentity");

test("isMatchIdentity", function () {
  expect(isMatchIdentity("aaaaaa")).toBe(true);
  expect(isMatchIdentity("aabbbaaa")).toBe(false);
  expect(isMatchIdentity("ccccc")).toBe(true);
});

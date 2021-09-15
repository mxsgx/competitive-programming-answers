const { test, expect } = require("@jest/globals");
const reverseBool = require("./reverseBool");

test("reverseBool", function () {
  expect(reverseBool(true)).toBe(false);
  expect(reverseBool(false)).toBe(true);
  expect(reverseBool({})).toBe("bukan boolean");
  expect(reverseBool(null)).toBe("bukan boolean");
});

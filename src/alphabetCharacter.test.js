const { test, expect } = require("@jest/globals");
const alphabetCharacter = require("./alphabetCharacter");

test("alphabetCharacter", function () {
  expect(alphabetCharacter("lamborgini")).toEqual("abgiilmnor");
  expect(alphabetCharacter("hacker")).toEqual("acehkr");
});

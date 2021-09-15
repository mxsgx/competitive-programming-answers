const { test, expect } = require("@jest/globals");
const howManyAlphabet = require("./howManyAlphabet");

test("howManyAlphabet", function () {
  expect(howManyAlphabet(7)).toEqual("Laaaaaaamborgini");
  expect(howManyAlphabet(2)).toEqual("Laamborgini");
  expect(howManyAlphabet(10)).toEqual("Laaaaaaaaaamborgini");
});

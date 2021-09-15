const { test, expect } = require("@jest/globals");
const removeCharacter = require("./removeCharacter");

test("removeCharacter", function () {
  expect(removeCharacter(["Kambing", "Chapung", "Kalong"])).toEqual(["Kambing", "Kalong"]);
  expect(removeCharacter(["ayam", "kuda", "badak"])).toEqual(["ayam", "kuda", "badak"]);
  expect(removeCharacter(["Cacing", "Bebek", "Cicak", "Beruang"])).toEqual(["Bebek", "Beruang"]);
});

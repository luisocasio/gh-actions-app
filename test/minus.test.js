const minus = require("../src/components/minus");

test("subtract 2 - 1 to equal 1", () => {
  expect(minus(2, 1)).toBe(1);
});

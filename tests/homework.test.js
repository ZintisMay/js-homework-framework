const hw = require("../homework");

// Check that test is
test("Default Code has not been modified accidentally (this is good!)", () => {
  expect(typeof hw).toBe("object");
  expect(Object.keys(hw).length).toBeGreaterThan(0);
});

// Num variable
test("variable num is equal to 210", () => {
  expect(hw.num).toBe(210);
});
// fruit variable
test("variable fruit is equal to apple", () => {
  expect(hw.fruit).toBe("apple");
});
// skyscraper variable
test("variable building is equal to skyscraper", () => {
  expect(hw.building).toBe("skyscraper");
});
test("variable building is a const", () => {
  try {
    building = null;
  } catch (e) {}
  expect(hw.building).toBe("skyscraper");
});

// Add function
test("function add 1 + 2 to equal 3", () => {
  expect(hw.add(1, 2)).toBe(3);
});

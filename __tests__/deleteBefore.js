const update = require("../deleteBefore");

const state = {
  users: [
    { user: "rodrigo", age: 48, active: false },
    { user: "barney", age: 36, active: true },
    { user: "fred", age: 40, active: false },
    { user: "rodrigo", age: 48, active: false },
    { user: "pebbles", age: 1, active: true }
  ]
};

const expectedState = {
  users: [
    { user: "barney", age: 36, active: true },
    { user: "fred", age: 40, active: false },
    { user: "pebbles", age: 1, active: true }
  ]
};

const updatedState = update(state, {
  users: {
    $deleteBefore: { active: true }
  }
});

test("deleteBefore", () => {
  expect(updatedState).toEqual(expectedState);
});

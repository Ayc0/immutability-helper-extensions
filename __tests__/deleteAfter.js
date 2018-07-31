const update = require("../deleteAfter");

const state = {
  users: [
    { user: "barney", age: 36, active: true },
    { user: "rodrigo", age: 48, active: false },
    { user: "fred", age: 40, active: false },
    { user: "pebbles", age: 1, active: true },
    { user: "rodrigo", age: 48, active: false }
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
    $deleteAfter: { active: true }
  }
});

test("deleteAfter", () => {
  expect(updatedState).toEqual(expectedState);
});

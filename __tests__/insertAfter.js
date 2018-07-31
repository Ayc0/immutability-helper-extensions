const update = require("../insertAfter");

const state = {
  users: [
    { user: "barney", age: 36, active: true },
    { user: "fred", age: 40, active: false },
    { user: "pebbles", age: 1, active: true }
  ]
};

const expectedState = {
  users: [
    { user: "barney", age: 36, active: true },
    { user: "rodrigo", age: 40, active: false },
    { user: "fred", age: 40, active: false },
    { user: "pebbles", age: 1, active: true },
    { user: "rodrigo", age: 40, active: false }
  ]
};

const updatedState = update(state, {
  users: {
    $insertAfter: [{ active: true }, { user: "rodrigo", age: 40, active: false }]
  }
});

test("insertAfter", () => {
  expect(updatedState).toEqual(expectedState);
});

const update = require("../insertBefore");

const state = {
  users: [
    { user: "barney", age: 36, active: true },
    { user: "fred", age: 40, active: false },
    { user: "pebbles", age: 1, active: true }
  ]
};

const expectedState = {
  users: [
    { user: "rodrigo", age: 40, active: false },
    { user: "barney", age: 36, active: true },
    { user: "fred", age: 40, active: false },
    { user: "rodrigo", age: 40, active: false },
    { user: "pebbles", age: 1, active: true }
  ]
};

const updatedState = update(state, {
  users: {
    $insertBefore: [{ active: true }, { user: "rodrigo", age: 40, active: false }]
  }
});

test("insertAfter", () => {
  expect(updatedState).toEqual(expectedState);
});

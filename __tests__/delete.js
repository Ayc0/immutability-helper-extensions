const update = require("../delete");

const state = {
  users: [
    { user: "barney", age: 36, active: true },
    { user: "fred", age: 40, active: false },
    { user: "pebbles", age: 1, active: true }
  ]
};

const expectedState = {
  users: [{ user: "fred", age: 40, active: false }, { user: "pebbles", age: 1, active: true }]
};

const updatedState = update(state, {
  users: {
    $delete: { user: "barney" }
  }
});

test("find", () => {
  expect(updatedState).toEqual(expectedState);
});

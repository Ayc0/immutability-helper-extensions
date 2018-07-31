## $find

```js
const state = {
  users: [
    { user: "barney", age: 36, active: true },
    { user: "fred", age: 40, active: false },
    { user: "pebbles", age: 1, active: true }
  ]
};

update(state, {
  users: {
    $find: [{ user: "barney" }, { age: { $set: 35 } }]
  }
});

/* state = {
  users: [
    { user: "barney", age: 35, active: true },
    { user: "fred", age: 40, active: false },
    { user: "pebbles", age: 1, active: true }
  ]
}; */
```

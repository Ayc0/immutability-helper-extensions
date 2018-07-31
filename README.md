## $find

```js
const state = {
  users: [
    { user: "barney", age: 36, active: true },
    { user: "fred", age: 40, active: false },
    { user: "pebbles", age: 1, active: true }
  ]
};

const updatedState = update(state, {
  users: {
    $find: [{ user: "barney" }, { age: { $set: 35 } }]
  }
});

/*
{
  users: [
    { user: "barney", age: 35, active: true },
    { user: "fred", age: 40, active: false },
    { user: "pebbles", age: 1, active: true }
  ]
}
*/
```

## $delete

```js
const state = {
  users: [
    { user: "barney", age: 36, active: true },
    { user: "fred", age: 40, active: false },
    { user: "pebbles", age: 1, active: true }
  ]
};

const updatedState = update(state, {
  users: {
    $delete: { user: "barney" }
  }
});

/*
{
  users: [
    { user: "fred", age: 40, active: false },
    { user: "pebbles", age: 1, active: true }
  ]
}
*/
```

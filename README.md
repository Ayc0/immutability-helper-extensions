This module is an extension of [immutability-helper](https://github.com/kolodny/immutability-helper).

# Installation

With `yarn`:

```
yarn add immutability-helper immutability-helper-extensions
```

With `npm`:

```
npm i --save immutability-helper immutability-helper-extensions
```

# Add an extension

To import an extension, you just have to import it:

```js
const update = require("immutability-helper");
require("immutability-helper-extensions/find");

// $find is loaded in the rest of the codebase
```

And if you want to import everything:

```js
const update = require("immutability-helper");
require("immutability-helper-extensions");
```

# List of extensions

- [`$find`](#find): find every element of an array that matches the selection and update it
- [`$delete`](#delete): remove every elements of an array that matches the selection
- [`$insertAfter`](#insertafter): find every element of an array that matches the selection and add after them a new element
- [`$insertBefore`](#insertbefore): find every element of an array that matches the selection and add before them a new element
- [`$deleteAfter`](#deleteafter): find every element of an array that matches the selection and remove the firsts elements after them
- [`$deleteBefore`](#deletebefore): find every element of an array that matches the selection and remove the firsts elements before them

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
    // $find: [selection, mutation]
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

## $insertAfter

```js
const state = {
  users: [
    { user: "barney", age: 36, active: true },
    { user: "fred", age: 40, active: false },
    { user: "pebbles", age: 1, active: true }
  ]
};

const updateState = update(state, {
  users: {
    $insertAfter: [{ active: true }, { user: "rodrigo", age: 40, active: false }]
  }
});

/*
{
  users: [
    { user: "barney", age: 36, active: true },
    { user: "rodrigo", age: 40, active: false },
    { user: "fred", age: 40, active: false },
    { user: "pebbles", age: 1, active: true },
    { user: "rodrigo", age: 40, active: false }
  ]
}
*/
```

## $insertBefore

```js
const state = {
  users: [
    { user: "barney", age: 36, active: true },
    { user: "fred", age: 40, active: false },
    { user: "pebbles", age: 1, active: true }
  ]
};

const updateState = update(state, {
  users: {
    $insertBefore: [{ active: true }, { user: "rodrigo", age: 40, active: false }]
  }
});

/*
{
  users: [
    { user: "rodrigo", age: 40, active: false },
    { user: "barney", age: 36, active: true },
    { user: "fred", age: 40, active: false },
    { user: "rodrigo", age: 40, active: false },
    { user: "pebbles", age: 1, active: true }
  ]
}
*/
```

## $deleteAfter

```js
const state = {
  users: [
    { user: "barney", age: 36, active: true },
    { user: "rodrigo", age: 48, active: false },
    { user: "fred", age: 40, active: false },
    { user: "pebbles", age: 1, active: true },
    { user: "rodrigo", age: 48, active: false }
  ]
};

const updatedState = update(state, {
  users: {
    $deleteAfter: { active: true }
  }
});

/*
{
  users: [
    { user: "barney", age: 36, active: true },
    { user: "fred", age: 40, active: false },
    { user: "pebbles", age: 1, active: true }
  ]
}
*/
```

## $deleteBefore

```js
const state = {
  users: [
    { user: "rodrigo", age: 48, active: false },
    { user: "barney", age: 36, active: true },
    { user: "fred", age: 40, active: false },
    { user: "rodrigo", age: 48, active: false },
    { user: "pebbles", age: 1, active: true }
  ]
};

const updatedState = update(state, {
  users: {
    $deleteBefore: { active: true }
  }
});

/*
{
  users: [
    { user: "barney", age: 36, active: true },
    { user: "fred", age: 40, active: false },
    { user: "pebbles", age: 1, active: true }
  ]
}
*/
```

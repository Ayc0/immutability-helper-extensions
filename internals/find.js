const update = require("immutability-helper");
const iteratee = require("lodash/iteratee");

const find = (param, array) => {
  const match = iteratee(param[0]);
  const next = param[1];
  return array.map(item => {
    if (!match(item)) {
      return item;
    }
    return update(item, next);
  });
};

module.exports = find;

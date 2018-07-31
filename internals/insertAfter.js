const update = require("immutability-helper");
const iteratee = require("lodash/iteratee");

const insertAfter = (param, array) => {
  const match = iteratee(param[0]);
  const element = param[1];
  const indexes = [];
  array.forEach((element, index) => {
    if (match(element)) {
      indexes.push(index);
    }
  });
  return update(array, {
    $splice: indexes.map((index, offset) => [index + 1 + offset, 0, element])
  });
};

module.exports = insertAfter;

const update = require("immutability-helper");
const iteratee = require("lodash/iteratee");

const insertBefore = (param, array) => {
  const match = iteratee(param[0]);
  const element = param[1];
  const indexes = [];
  array.forEach((element, index) => {
    if (match(element)) {
      indexes.push(index);
    }
  });
  return update(array, {
    $splice: indexes.map((index, offset) => [index + offset, 0, element])
  });
};

module.exports = insertBefore;

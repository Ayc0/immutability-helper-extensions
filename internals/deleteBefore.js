const update = require("immutability-helper");
const iteratee = require("lodash/iteratee");

const deleteBefore = (param, array) => {
  const match = iteratee(param);
  const indexes = [];
  array.forEach((element, index) => {
    if (match(element)) {
      indexes.push(index);
    }
  });
  return update(array, {
    $splice: indexes.map((index, offset) => [index - 1 - offset, 1])
  });
};

module.exports = deleteBefore;

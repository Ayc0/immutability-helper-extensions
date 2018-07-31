const iteratee = require("lodash/iteratee");

const del = (param, array) => {
  const match = iteratee(param);
  return array.filter(item => !match(item));
};

module.exports = del;

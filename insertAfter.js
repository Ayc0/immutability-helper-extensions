const update = require("immutability-helper");
const insertAfter = require("./internals/insertAfter");

update.extend("$insertAfter", insertAfter);

module.exports = update;

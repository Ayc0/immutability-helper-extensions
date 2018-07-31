const update = require("immutability-helper");
const insertBefore = require("./internals/insertBefore");

update.extend("$insertBefore", insertBefore);

module.exports = update;

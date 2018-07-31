const update = require("immutability-helper");
const find = require("./internals/find");

update.extend("$find", find);

module.exports = update;

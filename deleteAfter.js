const update = require("immutability-helper");
const deleteAfter = require("./internals/deleteAfter");

update.extend("$deleteAfter", deleteAfter);

module.exports = update;

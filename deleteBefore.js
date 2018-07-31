const update = require("immutability-helper");
const deleteBefore = require("./internals/deleteBefore");

update.extend("$deleteBefore", deleteBefore);

module.exports = update;

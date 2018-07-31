const update = require("immutability-helper");
const del = require("./internals/delete");

update.extend("$delete", del);

module.exports = update;

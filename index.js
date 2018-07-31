import update from "immutability-helper";
const find = require("./internals/find");
const del = require("./internals/delete");
const insertAfter = require("./internals/insertAfter");
const insertBefore = require("./internals/insertBefore");

update.extend("$find", find);

update.extend("$delete", del);

update.extend("$insertAfter", insertAfter);

update.extend("$insertBefore", insertBefore);

export default update;

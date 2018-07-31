import update from "immutability-helper";
const find = require("./internals/find");
const del = require("./internals/delete");
const insertAfter = require("./internals/insertAfter");
const insertBefore = require("./internals/insertBefore");
const deleteAfter = require("./internals/deleteAfter");
const deleteBefore = require("./internals/deleteBefore");

update.extend("$find", find);
update.extend("$delete", del);
update.extend("$insertAfter", insertAfter);
update.extend("$insertBefore", insertBefore);
update.extend("$deleteAfter", deleteAfter);
update.extend("$deleteBefore", deleteBefore);

export default update;

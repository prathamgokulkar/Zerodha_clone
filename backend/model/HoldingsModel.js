const { model } = require("mongoose");
const HoldingsSchema = require("../schema/HoldingsSchema");

const HoldingsModel = model("holdings", HoldingsSchema);

module.exports = HoldingsModel;

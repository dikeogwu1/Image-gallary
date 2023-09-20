const Image = require("../models/Image");
const { StatusCodes } = require("http-status-codes");

const dragAndDrop = async (req, res) => {
  res
    .status(StatusCodes.OK)
    .json({ success: true, msg: "drag and drop successful" });
};

module.exports = { dragAndDrop };

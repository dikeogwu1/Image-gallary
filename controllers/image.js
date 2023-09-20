const Image = require("../models/Image");
const { StatusCodes } = require("http-status-codes");

const getAllJobs = async (req, res) => {
  const image = await Image.find({});
  res.status(StatusCodes.OK).json({ image });
};

module.exports = { getAllJobs };

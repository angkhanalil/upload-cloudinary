const dotenv = require("dotenv");

const cloudinaryModule = require("cloudinary");
dotenv.config();
const cloudinary = cloudinaryModule.v2;

cloudinary.config({
  cloud_name: "dnyo5bfsx",
  api_key: "483459987221352",
  api_secret: "yveKg-jW-cpc34i3t6NBTFqoEBE",
  secure: true,
});

module.exports = cloudinary;

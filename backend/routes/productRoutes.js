const express = require("express");
const cloudinary = require("../utils/cloudinay");
const { Product } = require("../models/product");

const router = express.Router();

router.post("/", async (req, res) => {
  const { name, brand, desc, price, image } = req.body;
  try {
    console.log(name);
    console.log(brand);
    console.log(desc);
    console.log(price);
    // console.log(image);
    if (image) {
      const uploadRes = await cloudinary.uploader.upload(image, {
        upload_preset: "onlineshop",
      });
      console.log("uploadRes", uploadRes);
      if (uploadRes) {
        const product = new Product({
          name,
          brand,
          desc,
          price,
          image: uploadRes,
        });
        const saveProduct = await product.save();
        res.status(200).json(product);
      }
    }
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});

router.get("/", async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});
module.exports = router;

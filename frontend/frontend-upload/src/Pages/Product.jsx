import React, { useState } from "react";
import axios from "axios";

const Product = () => {
  const [name, setName] = useState("");
  const [brand, setBrand] = useState("");
  const [desc, setDesc] = useState("");
  const [price, setPrice] = useState(0.0);
  const [image, setImage] = useState("");
  const [product, setProduct] = useState({
    name: "",
    brand: brand,
    desc: desc,
    price: price,
    image: image,
  });
  const handlesubmit = (e) => {
    alert("DD");
    axios.post("http://localhost:5000/api/product", product).then((res) => {
      console.log(res);
    });
  };

  const handleProductImageUpload = (e) => {
    const file = e.target.files[0];

    TransformFileData(file);
  };

  const TransformFileData = (file) => {
    const reader = new FileReader();

    if (file) {
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        setImage(reader.result);
        setProduct({ ...product, image: reader.result });
      };
    } else {
      setImage("");
    }
  };
  return (
    <>
      <form>
        <pre>{JSON.stringify(product)}</pre>
        <label>name</label>
        <input
          type="text"
          name="name"
          onChange={(e) => {
            setProduct({ ...product, name: e.target.value });
          }}
        />
        <hr />
        <label>brand</label>
        <input
          type="text"
          name="brand"
          onChange={(e) => {
            setProduct({ ...product, brand: e.target.value });
          }}
        />
        <hr />
        <label>Desc</label>
        <input
          type="text"
          name="desc"
          onChange={(e) => {
            setProduct({ ...product, desc: e.target.value });
          }}
        />
        <hr />
        <label>Price</label>
        <input
          type="text"
          name="price"
          onChange={(e) => {
            setProduct({ ...product, price: e.target.value });
          }}
        />
        <hr />
        <label>Image</label>
        <input type="file" name="image" onChange={handleProductImageUpload} />
        <button type="button" onClick={handlesubmit}>
          save
        </button>
      </form>
    </>
  );
};

export default Product;

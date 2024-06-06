import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddProduct = ({ createProduct }) => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [descr, setDescr] = useState("");
  const [image, setImage] = useState("");

  const navigate = useNavigate();

  function handleAddProduct() {
    if (!title || !price || !image || !descr) {
      alert("Some inputs are empty");
      return;
    }

    let newProduct = {
      title,
      price,
      descr,
      image,
    };
    createProduct(newProduct);
    setTitle("");
    setDescr("");
    setPrice("");
    setImage("");
    navigate(-1);
  }

  return (
    <div>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="number"
        placeholder="Price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />
      <input
        type="text"
        placeholder="Description"
        value={descr}
        onChange={(e) => setDescr(e.target.value)}
      />
      <input
        type="text"
        placeholder="Image"
        value={image}
        onChange={(e) => setImage(e.target.value)}
      />
      <button onClick={handleAddProduct}>Add Product</button>
    </div>
  );
};

export default AddProduct;

import React, { useState } from "react";

const ProductCard = () => {
  const [product, setproduct] = useState({
    image:
      "https://static-01.daraz.com.np/p/c1550c024a4c38e52377238756df4798.jpg_300x0q75.webp",
    name: "Titan ladies Analog White Dial Women's Watch",
    price: 3990,
  });
  return (
    <div>
      <div
        style={{
          boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
          width: "400px",
          padding: "1rem",
        }}
      >
        <img src={product.image} alt="watch" />
        <h3 style={{ color: "grey" }}>Name: {product.name}</h3>
        <h4 style={{ color: "grey" }}>Rs.{product.price}</h4>
      </div>
      <div>
        <input
          type="text"
          placeholder="image url"
          onChange={(event) => {
            const newProduct = event.target.value;
            setproduct({ ...product, image: newProduct });
          }}
        />
      </div>

      <div>
        <input
          type="text"
          placeholder="name"
          onChange={(event) => {
            const newProduct = event.target.value;
            setproduct({ ...product, name: newProduct });
          }}
        />
      </div>

      <div>
        <input
          type="number"
          placeholder="price"
          onChange={(event) => {
            const newProduct = event.target.value;
            setproduct({ ...product, price: newProduct });
          }}
        />
      </div>
    </div>
  );
};

export default ProductCard;

import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

const Product = () => {
  const [product, setProduct] = useState([]);
  // const [error, setError] = useState(null)

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        console.log(res);
        setProduct(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 p-8 ">
      {product.map((products) => (
        <div className=" rounded-lg" key={products.id}>
          <h1 className="">{products.title}</h1>
          <div className="flex items-center ">
          <img className="h-48 " src={products.image} alt={product.title} />
          </div>
          <p>Description: {products.description} </p>
          <p>Price: K{products.price} </p>
          <p>category: {products.category} </p>
        </div>
      ))}
    </div>
  );
};

export default Product;

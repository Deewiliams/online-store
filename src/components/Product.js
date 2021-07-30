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
    
    <div className=" grid md:grid-cols-2 lg:grid-cols-4 gap-8 p-8 ">
      {product.map((products) => (
        <div className=" border-2 border-gray-300 rounded-lg" key={products.id}>
          <h1 className="text-blue-600 font-bold md:text-2xl mt-5">{products.title}</h1>
          <div className="inline-block align-middle pb-10 mt-10">
          <img className="h-48 md:h-72 lg:h-96" src={products.image} alt={product.title} />
          </div>
          <h2 className="font-bold md:text-lg lg:text-2xl">Price: K{products.price}</h2>
          <p className="md:text-2xl lg:md:text-2xl font-bold">category: <span className="text-gray-400">{products.category}</span></p>
        </div>
      ))}
    </div>
  );
};

export default Product;

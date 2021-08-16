import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import ProductList from './ProductList'

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
    <div className=" grid md:grid-cols-2 lg:grid-cols-4 gap-8 p-8 -mt-8 lg:-mt-8 cursor-pointer hover:shadow-2xl ">
      {product.map((products) => (
          <div className=" border-2 border-gray-300 shadow-2xl rounded-lg" key={products.id}>
        <ProductList 
        title = {products.title}
        image = {products.image}
        price = {products.price}
        category = {products.category}
        />
        </div>
      ))}
    </div>
  );
};

export default Product;

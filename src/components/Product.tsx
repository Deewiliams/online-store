import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import ProductList from "./ProductList";

import { ProductType } from "./types";

const Product = () => {
  const [products, setProducts] = useState<any>([]);

   

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        console.log(res);
        setProducts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className=" grid md:grid-cols-2 lg:grid-cols-4 gap-8 p-8 -mt-8 lg:-mt-8 cursor-pointer hover:shadow-2xl ">
      {products.map((product: ProductType) => (
        <ProductList
          id={product.id}
          title={product.title}
          image={product.image}
          price={product.price}
          category={product.category}
          // handleClick ={handleClick}
        />
      ))}
    </div>
  );
};

export default Product;

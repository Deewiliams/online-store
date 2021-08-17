import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import ProductList from "./ProductList";
import Loading from './Loading'
import { ProductType } from "./types";

const Product = () => {
  const [products, setProducts] = useState<any>([]);
  const [loading,setLoading] = useState(false);

   async function getAllProducts() {
     setLoading(true);
    axios
    .get("https://fakestoreapi.com/products")
    .then((res) => {
      console.log(res);
      setProducts(res.data);
      setLoading(false);
    })
    .catch((err) => {
      console.log(err);
      setLoading(false);
    });
}


  useEffect(() => {
    getAllProducts();
  },[]);

  return (
    <div className=" grid md:grid-cols-2 lg:grid-cols-4 gap-4 p-4 lg:-mt-8 cursor-pointer">
      {
        loading ? (<Loading />) : (
      products.map((product: ProductType) => (
        <ProductList
          id={product.id}
          title={product.title}
          image={product.image}
          price={product.price}
          category={product.category}
        />
      ))
        )}

    </div>
  );
};

export default Product;

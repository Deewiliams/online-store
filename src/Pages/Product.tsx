import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import ProductList from "../components/ProductList";
import Loading from "../components/Loading";
import { ProductType } from "../utils/types";
import { truncate } from "../utils/helpers";


const Product = () => {
  const [products, setProducts] = useState<any>([]);
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);

  async function getAllProducts() {
    setLoading(true);
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        setProducts(res.data);
        setLoading(false);
      })
      .catch((err) => {
        setErrorMessage(err.message);
        setLoading(false);
      });
  }

  useEffect(() => {
    getAllProducts();
  }, []);

  return (
    <>
      {/* Displaying an error message when an error has occurred */}
      {errorMessage ? (
        <h1 className="tex-md md:text-lg lg:text-2xl text-center">
          Error: {errorMessage}
        </h1>
      ) : (
        // Displays all the products
        <div className=" grid md:grid-cols-2 lg:grid-cols-4 gap-4 cursor-pointer">
          {loading ? (
            <Loading />
          ) : (
            products.map((product: ProductType) => (
              <ProductList
                id={product.id}
                title={truncate(product.title)}
                image={product.image}
                price={product.price}
                category={product.category}
              />
            ))
          )}
        </div>
      )}
    </>
  );
};



export default Product;

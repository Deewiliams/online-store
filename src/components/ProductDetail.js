import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import Loading from "./Loading";
// import Loading from "./Loading";

const ProductDetail = () => {
  const [detail, setDetail] = useState({});
  const [loading, setLoading] = useState(false);

  async function fetchProductDetails() {
    setLoading(true);
    axios
      .get("https://fakestoreapi.com/products/1")
      .then((res) => {
        console.log(res);
        setDetail(res.data);
        setLoading(false);
      })

      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }

  useEffect(() => {
    fetchProductDetails();
  }, []);
  console.log(detail);
  console.log(loading);

  // // early exit pattern
  // if (loading) {
  //   return <Loading />;
  // }

  return (
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
      {loading ? (
        "loading"
      ) : (
        <div className="md:flex">
          <div className="md:flex-shrink-0">
            <img
              className="h-60 w-full object-cover md:h-full md:w-48"
              src={detail.image}
              alt={detail.title}
            />
          </div>
          <div className="p-8">
            <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
              <h1> {detail.title}</h1>
            </div>
            <p> price: K {detail.price} </p>
            <p> Category: {detail.category} </p>
            <p className="mt-2 text-gray-500">
            Description: {detail.description}
            </p>
          
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetail;

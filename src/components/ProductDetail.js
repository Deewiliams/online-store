import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import DetailList from './DetailList'


const ProductDetail = () => {
  const [detail, setDetail] = useState({});
  const [loading, setLoading] = useState(false);

  async function fetchProductDetails() {
    setLoading(true);
    axios
      .get("https://fakestoreapi.com/products/4")
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

  return (
     <div className=" bg-white shadow-lg border-2 m-auto border-gray-300 p-2 -mt-16 lg:w-2/3   flex lg:flex-row items-center justify-evenly ">
      {loading ? ("Loading..." ): (
        <DetailList
        title= {detail.title}
        image= {detail.image}
        price={detail.price}
        category= {detail.category}
        description= {detail.description}
        />
      )}
      
    </div>

   
  );
};

export default ProductDetail;

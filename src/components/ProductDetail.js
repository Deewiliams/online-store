import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";


const ProductDetail = () => {
  const [detail, setDetail] = useState({});
  const [loading, setLoading] = useState(false);

  async function fetchProductDetails() {
    setLoading(true);
    axios
      .get("https://fakestoreapi.com/products/6")
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
     <div className=" bg-white shadow-lg border-2 border-gray-300 p-8 m-4 -mt-16 flex flex-row items-center justify-evenly ">
      {loading ? ("Loading..." ): (<>
        <div>
        <img
              className=" h-48 md:h-72 lg:h-full inline-block md:w-full lg:w-72 lg:mb-50"
               src={detail.image}
              alt={detail.title}
           />
      </div>
      <div className="border-gray-200 border-2 w-2/5 rounded-md">
      <div className=" text-left m-4">
        <h1 className="border-2 border-gray-200 p-2 h-10">{detail.title}</h1>
        <p className="p-2">K {detail.price}</p>
        <p className="bg-gray-300 shadow-lg border-2 border-gray-200 p-2 h-10">{detail.category}</p>
        <p>{detail.description}</p>
      </div>
      </div>
      </>)}
      
    </div>

   
  );
};

export default ProductDetail;

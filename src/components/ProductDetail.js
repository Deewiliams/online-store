import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";


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

  // // early exit pattern
  // if (loading) {
  //   return <Loading />;
  // }

  return (
    // <div className="max-w-md mx-auto bg-white rounded-xl shadow-lg overflow-hidden md:max-w-6xl lg:h-96">
    //   {loading ? (
    //     "loading"
    //   ) : (
    //     <div className="md:flex">
    //       <div className="md:flex-shrink-0">
    //         <img
    //           className="h-60 w-full object-cover md:h-full lg:h-full  md:w-48"
    //           src={detail.image}
    //           alt={detail.title}
    //         />
    //       </div>
    //       <div className="p-8 text-center">
    //         <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
    //           <h1> {detail.title}</h1>
    //         </div>
    //         <p> price: K {detail.price} </p>
    //         <p> Category: {detail.category} </p>
    //         <p className="mt-2 text-gray-500">
    //         {/* Description: {detail.description} */}
    //         </p>

    //       </div>
    //     </div>
    //   )}
    // </div>
    <div className="bg-white w-3/6  shadow-lg p-4 lg:ml-72">
      {loading ? (
        "loading"
      ) : (
        <div className="grid grid-flow-col p-4">
          <div className="bg-white -mr-60 lg:w-5/6 rounded-lg">
            <img
              className=" h-48 md:h-72 lg:h-full inline-block align-middle object-cover  md:w-48 lg:w-72 lg:mb-50"
              src={detail.image}
              alt={detail.title}
            />
            
          </div>
          <div className="bg-white w-96 rounded-lg text-left text-lg font-bold">
            <h1 className="text-2xl"> {detail.title}</h1>
            <p> price: K {detail.price} </p>
            <p>
              Category: <pan className="text-gray-400">{detail.category}</pan>{" "}
            </p>
            <p>
              {" "}
              Description:{" "}
              <span className="text-gray-400 font-bold">
                {detail.description}{" "}
              </span>{" "}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetail;

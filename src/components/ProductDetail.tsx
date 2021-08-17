import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import DetailList from "./DetailList";
import Loading from "./Loading";
import { useParams } from "react-router-dom";

const ProductDetail = () => {
  const [detail, setDetail] = useState<any>({});
  const [loading, setLoading] = useState(false);

  let { productId } = useParams<{ productId: string }>();

  async function fetchProductDetails() {
    setLoading(true);
    axios
      .get(`https://fakestoreapi.com/products/${productId}`)
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

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div className=" bg-white shadow-lg border-2 m-auto border-gray-300 p-2 -mt-16 lg:w-2/3 flex lg:flex-row items-center justify-evenly ">
          <DetailList
            id={detail.id}
            title={detail.title}
            image={detail.image}
            price={detail.price}
            category={detail.category}
            description={detail.description}
          />
        </div>
      )}
    </>
  );
};

export default ProductDetail;

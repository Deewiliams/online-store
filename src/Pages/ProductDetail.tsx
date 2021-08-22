import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import DetailList from "../components/DetailList";
import Loading from "../components/Loading";
import { useParams } from "react-router-dom";
import { truncate } from "../utils/helpers";

const ProductDetail = () => {
  const [detail, setDetail] = useState<any>({});
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);

  let { productId } = useParams<{ productId: string }>();

  async function fetchProductDetails() {
    setLoading(true);
    axios
      .get(`https://fakestoreapi.com/products/${productId}`)
      .then((res) => {
        setDetail(res.data);
        setLoading(false);
      })

      .catch((err) => {
        setErrorMessage(err.message);
        setLoading(false);
      });
  }

  useEffect(() => {
    fetchProductDetails();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {errorMessage ? (
        <h1 className="tex-md md:text-lg lg:text-2xl text-center">
          Error: {errorMessage}
        </h1>
      ) : (
        <>
          {loading ? (
            <Loading />
          ) : (
            <div className=" bg-white shadow-lg border-2 m-auto rounded-lg border-gray-300 p-2 mt-10 lg:w-2/3 flex lg:flex-row items-center justify-evenly ">
              <DetailList
                id={detail.id}
                title={truncate(detail.title)}
                image={detail.image}
                price={detail.price}
                category={detail.category}
                description={detail.description}
              />
            </div>
          )}
        </>
      )}
    </>
  );
};

export default ProductDetail;

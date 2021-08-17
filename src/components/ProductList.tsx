import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { ProductType } from "./types";

const ProductList = (props: ProductType) => {
  return (
    <div
      className="border-2 border-gray-300 shadow-2xl rounded-lg"
      key={props.id}
    >
      <h1 className="text-blue-600 font-bold md:text-2xl mt-5">
        {props.title}
      </h1>
      <Link to={`/product-details/${props.id}`}>
      <div className="inline-block align-middle pb-10 mt-10">
        <img
          className="h-48 md:h-72 lg:h-96"
          src={props.image}
          alt={props.title}
        />
      </div>
      </Link>
      <h2 className="font-bold md:text-lg lg:text-2xl">
        Price: K{props.price}
      </h2>
      <p className="md:text-2xl lg:md:text-2xl font-bold">
        category: <span className="text-gray-400">{props.category}</span>
      </p>

    </div>
  );
};
ProductList.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  category: PropTypes.string.isRequired,
};
export default ProductList;

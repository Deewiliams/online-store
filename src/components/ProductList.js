import React from "react";
import PropTypes from "prop-types";

const ProductList = (props) => {
  return (
    <div>
      <h1 className="text-blue-600 font-bold md:text-2xl mt-5">
        {props.title}
      </h1>
      <div className="inline-block align-middle pb-10 mt-10">
        <img
          className="h-48 md:h-72 lg:h-96"
          src={props.image}
          alt={props.title}
        />
      </div>
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
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  category: PropTypes.string.isRequired,
};
export default ProductList;

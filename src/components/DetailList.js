import React from "react";
import PropTypes from "prop-types";

const DetailList = (props) => {
  return (
    <>
      <div>
        <img
          className=" h-48 md:h-72 lg:h-full inline-block md:w-full lg:w-72 lg:mb-50"
          src={props.image}
          alt={props.title}
        />
      </div>
      <div
        className="border-gray-200 border-2 w-2/4 md:text-lg
      lg:text-2xl m-auto shadow-md rounded-md"
      >
        <div className=" text-left m-4">
          <h1 className="border-2 border-gray-200 p-2 h-10 -mt-2 text-sm md:text-lg lg:text-2xl">
            {props.title}
          </h1>
          <p className="p-2">K {props.price}</p>
          <p className="bg-gray-300 shadow-lg border-2 border-gray-200 p-2 h-10">
            {props.category}
          </p>
          <p className="lg:text-lg text-gray-600 font-bold mt-5 text-sm md:text-lg">
            {props.description}
          </p>
        </div>
      </div>
    </>
  );
};
DetailList.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  category: PropTypes.string.isRequired,
  descripton: PropTypes.string.isRequired,
};

export default DetailList;

import React from 'react'
import PropTypes from "prop-types";

const Button = (props:any) => {
    return (
        <button
        className="bg-blue-400 placeholder-gray-500 border-2 -mt-10 md:ml-16 lg:ml-28 px-28 m-4 hover:bg-blue-300 hover:text-white border-gray-300 rounded-lg p-2 md:w-96 h-10 placeholder-opacity-100 ..."
        >
          {props.Submit}
      </button>
    )
}

Button.propTypes = {
    Submit: PropTypes.string.isRequired,
  };
export default Button

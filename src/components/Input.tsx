import React from "react";

const Input = (props: any) => {
  return (
    <>
      <input
        className="placeholder-gray-500 border-2  border-gray-300 rounded-lg p-2 md:w-96 placeholder-opacity-100 ..."
        {...props}
      />
    </>
  );
};

export default Input;

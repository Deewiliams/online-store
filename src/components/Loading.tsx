import React from "react";

const Loading = () => {
  let circleCommonClasses = "h-2 w-2 bg-current rounded-full";

  return (
    <div className="loading">
      <div className="flex">
        <div className={`${circleCommonClasses} mr-1 animate-bounce`}></div>
        <div className={`${circleCommonClasses} mr-1 animate-bounce200`}></div>
        <div className={`${circleCommonClasses} animate-bounce400`}></div>
      </div>
    </div>
  );
};

export default Loading;

import React from "react";

const SearchBar = () => {
  return (
    <div className="grid mt-40 p-8  ">
        
     <form className="flex flex-row items-center">
         <div>
        <input
        class="placeholder-gray-500 md:w3/4 h-12 -mt-10 rounded-lg border-2 border-gray-300 placeholder-opacity-600 ..."
        placeholder="Search"
      />
      </div>
      <div>
       <button class="bg-blue-500 space-x-4 hover:bg-blue-700 text-white font-bold py-3  px-4 rounded">Search </button>
       </div>
   </form>
     
    </div>
  );
};

export default SearchBar;

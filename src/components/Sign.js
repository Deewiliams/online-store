import React from "react";
import { useState } from "react";

const Sign = () => {
  const initialState = {
    email: "",
    username: "",
    password: "",
    name: {
      firstName: "",
      lastName: "",
    },
    address: {
      city: "",
      street: "",
      number: 3,
      zipcode: "",
      geolocation: {
        lat: "",
        long: "",
      },
    },
    phone: "",
  };

  const [userData, setUserData] = useState(initialState);

  function handleChange(event) {
    setUserData({ ...userData, [event.target.name]: event.target.value });
    // console.log(userData);
  }

  function handleClick () {
    // setErrors(company)
    console.log(userData);
  }

  return (
    <div className="bg-white m-4 w-80 -mt-14 lg:m-auto shadow-lg border-4 md:w-2/3">
      <h1 className="text-center">Sign Up</h1>

      <form className="grid grid-cols md:grid-cols-2 m-2 lg:grid-cols-1 lg:m-4 space-y-4" onSubmit={handleClick}>
        
        <input
          className="placeholder-gray-500 border-2  border-gray-300 rounded-lg p-2 md:w-96 placeholder-opacity-100 ..."
          placeholder="fakestore@example.com"
          type="email"
          name="email"
          value={userData.email}
          onChange={handleChange}
        />
        <input
          className="placeholder-gray-500 border-2  border-gray-300 rounded-lg p-2 md:w-96 placeholder-opacity-100 ..."
          placeholder="username"
          type="text"
          name="username"
          value={userData.username}
          onChange={handleChange}
        />
        <input
          className="placeholder-gray-500 border-2  border-gray-300 rounded-lg p-2 md:w-96 placeholder-opacity-100 ..."
          placeholder="password"
          type="password"
          name="password"
          value={userData.password}
          onChange={handleChange}
        />
        <input
          className="placeholder-gray-500 border-2  border-gray-300 rounded-lg p-2 md:w-96 placeholder-opacity-100 ..."
          placeholder=" firstname"
          type="text"
          name="firstName"
          value={userData.firstName}
          onChange={handleChange}
        />
        <input
          className="placeholder-gray-500 border-2  border-gray-300 rounded-lg p-2 md:w-96 placeholder-opacity-100 ..."
          placeholder="lastname"
          type="text"
          name="lastName"
          value={userData.lastName}
          onChange={handleChange}
        />
        <input
          className="placeholder-gray-500 border-2  border-gray-300 rounded-lg p-2 md:w-96 placeholder-opacity-100 ..."
          placeholder="city"
          type="text"
          name="city"
          value={userData.city}
          onChange={handleChange}
        />
        <input
          className="placeholder-gray-500 border-2  border-gray-300 rounded-lg p-2 md:w-96 placeholder-opacity-100 ..."
          placeholder="street"
          type="text"
          name="street"
          value={userData.street}
          onChange={handleChange}
        />
        <input
          className="placeholder-gray-500 border-2  border-gray-300 rounded-lg p-2 md:w-96 placeholder-opacity-100 ..."
          placeholder="number"
          type="number"
          name="number"
          value={userData.number}
          onChange={handleChange}
        />
        <input
          className="placeholder-gray-500 border-2  border-gray-300 rounded-lg p-2 md:w-96 placeholder-opacity-100 ..."
          placeholder="zipcode"
          type="number"
          name="zipcode"
          value={userData.zipcode}
          onChange={handleChange}
        />
        <input
          className="placeholder-gray-500 border-2  border-gray-300 rounded-lg p-2 md:w-96 placeholder-opacity-100 ..."
          placeholder="lat"
          type="text"
          name="lat"
          value={userData.lat}
          onChange={handleChange}
        />
        <input
          className="placeholder-gray-500 border-2  border-gray-300 rounded-lg p-2 md:w-96 placeholder-opacity-100 ..."
          placeholder="long"
          type="text"
          name="long"
          value={userData.long}
          onChange={handleChange}
        />
        <input
          className="placeholder-gray-500 border-2  border-gray-300 rounded-lg p-2 md:w-96 placeholder-opacity-100 ..."
          placeholder="phone"
          type="number"
          name="phone"
          value={userData.phone}
          onChange={handleChange}
        />
        </form>
        <button
            className="bg-purple-500 
                text-gray-100 text-2xl lg:-w-40 mt-4 px-32 py-2
                 md:px-36 md:text-4xl md:-mt-20 lg:py-4 lg:w-2/3
                lg:px-20 lg:text-3xl hover:bg-purple-600 
                hover:text-white rounded-lg
                "
            onClick={handleClick}
          >
            Login
          </button>
    </div>
  );
};

export default Sign;

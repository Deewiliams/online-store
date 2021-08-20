import React from "react";
import { useState } from "react";
import axios from "axios";
import Input from "./Input";

const Sign = () => {
  const [userData, setUserData] = useState({
    email: "",
    username: "",
    password: "",
    firstname: "",
    lastname: "",
    city: "",
    street: "",
    number: "",
    zipcode: "",
    lat: "",
    long: "",
    phone: "",
  });
  const[errorMessage,setErrorMessage] = useState( {
    isError: false,
    message: "",
  });

  function handleChange(event) {
    setUserData({ ...userData, [event.target.name]: event.target.value });
  }

  function handleClick() {
    console.log(userData);
    axios
      .post("https://fakestoreapi.com/users", {
        body: JSON.stringify({
          email: userData.email,
          username: userData.username,
          password: userData.password,
          name: {
            firstname: userData.firstname,
            lastname: userData.lastname,
          },
          address: {
            city: userData.city,
            street: userData.street,
            number: userData.number,
            zipcode: userData.zipcode,
            geolocation: {
              lat: userData.lat,
              long: userData.long,
            },
          },
          phone: userData.phone,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      })
      
      .then((res) => {
        setUserData(res)
        setErrorMessage({
          ...errorMessage,
          message: "you have successfully registered as a company",
        });
      })
      .catch((err) => {
        setErrorMessage({
          ...errorMessage,
          isError: true,
          message: err.message,
        });
      });
  }

  return (
    <div className="w-80 -mt-28 m-auto  rounded-lg md:w-3/4 lg:w-2/6">
      <h1 className="text-center lg:text-2xl font-bold ">Sign Up</h1>
      <p style={{ color: errorMessage.isError ? "red" : "green" }}>
            {errorMessage.message}
          </p>
            <form
        className="grid grid-cols  m-auto p-4 md:ml-12 lg:ml-24 space-y-4"
        onSubmit={handleClick}
      >
        <Input
          placeholder="fakestore@example.com"
          type="email"
          name="email"
          value={userData.email}
          onChange={handleChange}
        />
        <Input
          placeholder="username"
          type="text"
          name="username"
          value={userData.username}
          onChange={handleChange}
        />
        <Input
          placeholder="password"
          type="password"
          name="password"
          value={userData.password}
          onChange={handleChange}
        />
        <Input
          placeholder=" firstname"
          type="text"
          name="firstname"
          value={userData.firstname}
          onChange={handleChange}
        />
        {userData.firstname}
        <Input
          placeholder="lastname"
          type="text"
          name="lastname"
          value={userData.lastname}
          onChange={handleChange}
        />
        <Input
          placeholder="city"
          type="text"
          name="city"
          value={userData.city}
          onChange={handleChange}
        />
        <Input
          placeholder="street"
          type="text"
          name="street"
          value={userData.street}
          onChange={handleChange}
        />
        <Input
          placeholder="number"
          type="number"
          name="number"
          value={userData.number}
          onChange={handleChange}
        />
        <Input
          placeholder="zipcode"
          type="number"
          name="zipcode"
          value={userData.zipcode}
          onChange={handleChange}
        />
        <Input
          placeholder="lat"
          type="text"
          name="lat"
          value={userData.lat}
          onChange={handleChange}
        />
        <Input
          placeholder="long"
          type="text"
          name="long"
          value={userData.long}
          onChange={handleChange}
        />
        <Input
          placeholder="phone"
          type="number"
          name="phone"
          value={userData.phone}
          onChange={handleChange}
        />
      
      </form>
      <button className="bg-blue-400 placeholder-gray-500 border-2 
      -mt-10 md:ml-16 lg:ml-28 px-28 m-4 hover:bg-blue-300 hover:text-white 
      border-gray-300 rounded-lg p-2 md:w-96 h-10 placeholder-opacity-100 ..." 
        type="submit"
        onClick={handleClick}
        >submit</button>
      
    </div>
  );
};

export default Sign;

import React from "react";
import { useState } from "react";
import axios from "axios";
import Input from './Input'
import Button from "./Button"
import { SignUpType } from "./types";

const Sign = () => {
 

  const message = {
    isError: false,
    message: "",
  };

  const [userData, setUserData] = useState();
  const [email,setEmail]= useState();
  const [username,setUserName]= useState();
  const [password,setPassword]= useState();
  const [firstname,setFirstName]= useState();
  const [lastname,setLastName]= useState();
  const [city,setCity]= useState();
  const [street,setStreet]= useState();
  const [number,setNumber]= useState();
  // const [zipcode,setZipCode= useState();
  const [lat,setLat]= useState();
  const [long,setLong]= useState();
  const [phone,setPhone]= useState();
  const [errorMessage,setErrorMessage] = useState(message);

  function handleChange(event) {
    setUserData({ ...userData, [event.target.name]: event.target.value });
    console.log(userData);
  }

  function handleClick() {
    console.log(userData);
    axios
      .post("https://fakestoreapi.com/users", {
        body: JSON.stringify( {
          email:'John@gmail.com',
          username:'johnd',
          password:'m38rmF$',
          name:{
              firstname:'John',
              lastname:'Doe'
          },
          address:{
              city:'kilcoole',
              street:'7835 new road',
              number:3,
              zipcode:'12926-3874',
              geolocation:{
                  lat:'-37.3159',
                  long:'81.1496'
              }
          },
          phone:'1-570-236-7033'
      }),
      })
      .then((userData) => {
        // console.log(response);
        console.log(userData);
        
        setErrorMessage({
            ...errorMessage,
            message: "You have successfully registered"
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
      <p style={{ color: errorMessage.isError ? "error" : "green" }}>
            {errorMessage.message}
          </p>
      <form
        className="grid grid-cols  m-auto p-4 md:ml-12 lg:ml-24 space-y-4"
        onSubmit={handleChange}
      >
        <Input
          placeholder="fakestore@example.com"
          type="email"
          name="email"
          value={email}
          onChange={event => setEmail(event.target.value)}
        />
        {email}
        <Input
          placeholder="username"
          type="text"
          name="username"
          value={username}
          onChange={event => setUserName(event.target.value)}
        />
        <Input
          placeholder="password"
          type="password"
          name="password"
          value={password}
          onChange={event => setPassword(event.target.value)}
        />
        <Input
          placeholder=" firstname"
          type="text"
          name="firstname"
          value={firstname}
          onChange={event => setFirstName(event.target.value)}
        />
        <Input
          placeholder="lastname"
          type="text"
          name="lastname"
          value={lastname}
          onChange={event => setLastName(event.target.value)}
        />
        <Input
          placeholder="city"
          type="text"
          name="city"
          value={city}
          onChange={event => setCity(event.target.value)}
        />
        <Input
          placeholder="street"
          type="text"
          name="street"
          value={street}
          onChange={event => setStreet(event.target.value)}
        />
        <Input
          placeholder="number"
          type="number"
          name="number"
          value={number}
          onChange={event => setNumber(event.target.value)}
        />
        {/* <Input
          placeholder="zipcode"
          type="number"
          name="zipcode"
          value={zipcode}
          onChange={event => setZipCode(event.target.value)}
        /> */}
        <Input
          placeholder="lat"
          type="text"
          name="lat"
          value={lat}
          onChange={event => setLat(event.target.value)}
        />
        <Input
          placeholder="long"
          type="text"
          name="long"
          value={long}
          onChange={event => setLong(event.target.value)}
        />
        <Input
          placeholder="phone"
          type="number"
          name="phone"
          value={phone}
          onChange={event => setPhone(event.target.value)}
        />
      </form>
      <Button
        placeholder="Submit"
        onClick={handleClick}
        Submit= "submit"
       />
        
      
    </div>
  );
};

export default Sign;

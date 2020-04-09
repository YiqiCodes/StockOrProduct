import React, { useState } from "react";
import axios from "axios";

const Home = () => {
  const [applePrice, setApplePrice] = useState(0);
  const [originalApplePrice, setOriginalApplePrice] = useState(0);

  axios
    .get("https://financialmodelingprep.com/api/v3/company/profile/AAPL")
    .then((response) => {
      console.log(response.data.profile.price);
      setApplePrice(response.data.profile.price);
    })
    .catch((error) => {
      console.log(error);
    });

  axios
    .get("https://financialmodelingprep.com/api/v3/enterprise-value/AAPL")
    .then((response) => {
      console.log(response.data.enterpriseValues[1]["Stock Price"]);
      setOriginalApplePrice(response.data.enterpriseValues[1]["Stock Price"]);
    })
    .catch((error) => {
      console.log(error);
    });

  return (
    <>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div>Cost: 1000</div>
        <div>Current Price: {applePrice}</div>
        <div>Original Price: {originalApplePrice}</div>
        <div>Could have bought: {1000 / originalApplePrice} Shares</div>
        <div>Now worth: {4.444 * applePrice} </div>
        <div>Net Potential Gain(Loss): {1191 - 1000} </div>
      </div>
    </>
  );
};

export default Home;

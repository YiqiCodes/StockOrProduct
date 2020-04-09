import React, { useState } from "react";
import axios from "axios";

const Home = () => {
  const [applePrice, setApplePrice] = useState(0);

  console.log("apple", applePrice);
  console.log("apple2", setApplePrice);

  axios
    .get("https://financialmodelingprep.com/api/v3/company/profile/AAPL")
    .then((response) => {
      console.log(response.data.profile.price);
      setApplePrice(response.data.profile.price);
    })
    .catch((error) => {
      console.log(error);
    });

  return (
    <>
      <div>{applePrice}</div>
    </>
  );
};

export default Home;

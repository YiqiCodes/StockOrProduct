import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

// styles
import {
  TextOutPutContainer,
  TextOutputIndividual,
  CostYearInput,
  SubmitButton,
  GoBackButton,
  ProductLogo,
  ProductForm,
  ProductContainerDiv,
  ErrorText,
} from "../App.styles";

const PhoneSelector = (props) => {
  const [price, setPrice] = useState(0);
  const [originalPrice, setOriginalPrice] = useState(0);
  const [phoneCost, setPhoneCost] = useState(0);
  const [yearBought, setYearBought] = useState(0);
  const [shares, setShares] = useState(0);
  const [currentValue, setCurrentValue] = useState(0);
  const [gainLoss, setGainLoss] = useState(0);
  const [isClicked, setIsClicked] = useState(false);
  const [isCostValid, setIsCostValid] = useState(true);
  const [isYearValid, setIsYearValid] = useState(true);

  const getStockPrice = (stockRecords) => {
    let stockPrice;
    for (let stockYear of stockRecords) {
      if (stockYear.date.includes(yearBought.toString())) {
        stockPrice = stockYear["Stock Price"];
        break;
      }
    }
    return stockPrice;
  };

  const handlePhoneChange = (event) => {
    setPhoneCost(event.target.value);
  };

  const handleYearChange = (event) => {
    setYearBought(event.target.value);
  };

  const handleSubmit = (event) => {
    if (yearBought >= 2009 && yearBought <= 2019 && phoneCost > 0) {
      let sharesBought = (phoneCost / originalPrice).toFixed(2);
      let currentWorth = (sharesBought * price).toFixed(2);
      let currentGain = (currentWorth - phoneCost).toFixed(2);

      setCurrentValue(currentWorth);
      setShares(sharesBought);
      setGainLoss(currentGain);
      setIsClicked(true);
      setIsCostValid(true);
      setIsYearValid(true);
      event.preventDefault();

      //Error handlers
    } else if (phoneCost <= 0 && yearBought >= 2009 && yearBought <= 2019) {
      setIsCostValid(false);
      setIsYearValid(true);
      event.preventDefault();
    } else if ((yearBought < 2009 || yearBought > 2019) && phoneCost > 0) {
      setIsCostValid(true);
      setIsYearValid(false);
      event.preventDefault();
    } else {
      setIsCostValid(false);
      setIsYearValid(false);
      event.preventDefault();
    }
  };

  //Fetch current stock price
  axios
    .get(props.productKey.setPriceAPI)
    .then((response) => {
      setPrice(response.data.profile.price);
    })
    .catch((error) => {
      console.log(error);
    });

  //Fetch original stock price
  axios
    .get(props.productKey.setOriginalPriceAPI)
    .then((response) => {
      setOriginalPrice(getStockPrice(response.data.enterpriseValues));
    })
    .catch((error) => {
      console.log(error);
    });

  return (
    <>
      <ProductContainerDiv>
        <ProductLogo src={props.productKey.logo} alt=""></ProductLogo>
        <ProductForm onSubmit={handleSubmit}>
          <CostYearInput
            placeholder="Enter Year of Purchase"
            onChange={handleYearChange}
          ></CostYearInput>
          {isYearValid === false ? (
            <ErrorText>Please enter a year between 2009-2019!</ErrorText>
          ) : null}
          <CostYearInput
            placeholder="Enter Purchase Cost"
            onChange={handlePhoneChange}
          />
          {isCostValid === false ? (
            <ErrorText>Please enter a positive value!</ErrorText>
          ) : null}
          {/* <Link to="/cars"> */}
          <SubmitButton type="submit" value="Submit">
            Submit
          </SubmitButton>
          {/* </Link> */}
        </ProductForm>
        {isClicked === true ? (
          <TextOutPutContainer>
            <TextOutputIndividual>
              Current stock price: ${price}
              <br></br>
              Stock price in {yearBought}: ${originalPrice}
              <br></br>
              <br></br>
              You could have bought: {shares} Shares
              <br></br>
              Those shares are now worth: ${currentValue}
              <br></br>
              <br></br>
              If you bought stock instead of the product, <br></br>
              your Gain(Loss) would be: ${gainLoss}
              <br></br>
            </TextOutputIndividual>
            <br></br>
            <TextOutputIndividual
              style={{ fontWeight: 200, fontSize: "large" }}
            >
              {gainLoss > 0
                ? `You would have made more money buying stock. Was your
                    product worth $${gainLoss}?`
                : "Seems like you made the right choice buying the product!"}
            </TextOutputIndividual>
            <br></br>
            {props.productKey.setPriceAPI.includes("NDAQ") ? (
              <>
                <TextOutputIndividual
                  style={{ fontWeight: 100, fontSize: "small" }}
                >
                  * The NASDAQ Composite was used as a proxy as this company is
                  not traded on North American Markets.
                </TextOutputIndividual>
              </>
            ) : null}
          </TextOutPutContainer>
        ) : null}

        {props.productKey.type.includes("phone") ? (
          <Link to="/">
            <GoBackButton>Go Back</GoBackButton>
          </Link>
        ) : (
          <Link to="/cars">
            <GoBackButton>Go Back</GoBackButton>
          </Link>
        )}
        <Link to="/cars">
          <GoBackButton style={{ background: "#324F4B" }}>
            Next Product
          </GoBackButton>
        </Link>
      </ProductContainerDiv>
    </>
  );
};

export default PhoneSelector;

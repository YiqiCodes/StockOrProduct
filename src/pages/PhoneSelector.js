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
  PhoneLogo,
  PhoneForm,
  PhoneContainerDiv,
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
    .get(props.phoneKey.setPriceAPI)
    .then((response) => {
      setPrice(response.data.profile.price);
    })
    .catch((error) => {
      console.log(error);
    });

  //Fetch original stock price
  axios
    .get(props.phoneKey.setOriginalPriceAPI)
    .then((response) => {
      setOriginalPrice(getStockPrice(response.data.enterpriseValues));
    })
    .catch((error) => {
      console.log(error);
    });

  return (
    <>
      <PhoneContainerDiv>
        <PhoneLogo src={props.phoneKey.logo} alt=""></PhoneLogo>
        <PhoneForm onSubmit={handleSubmit}>
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
          <SubmitButton type="submit" value="Submit">
            Submit
          </SubmitButton>
        </PhoneForm>
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
              If you bought stock instead of the phone, <br></br>
              your Gain(Loss) would be: ${gainLoss}
              <br></br>
            </TextOutputIndividual>
            <br></br>
            <TextOutputIndividual
              style={{ fontWeight: 200, fontSize: "large" }}
            >
              {gainLoss > 0
                ? `You would have made more money buying stock. Was your
                    phone worth $${gainLoss}?`
                : "Seems like you made the right choice buying the phone!"}
            </TextOutputIndividual>
            <br></br>
            {props.phoneKey.logo.includes("Samsung") ? (
              <>
                <TextOutputIndividual
                  style={{ fontWeight: 100, fontSize: "small" }}
                >
                  * The NASDAQ Composite was used as a proxy as Samsung is not
                  traded on North American Markets.
                </TextOutputIndividual>
              </>
            ) : null}
          </TextOutPutContainer>
        ) : null}
        <Link to="/">
          <GoBackButton>Go Back</GoBackButton>
        </Link>
      </PhoneContainerDiv>
    </>
  );
};

export default PhoneSelector;

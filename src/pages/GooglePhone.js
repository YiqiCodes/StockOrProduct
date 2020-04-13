import React, { useState } from "react";
import axios from "axios";

// styles
import {
  TextOutPutContainer,
  TextOutputIndividual,
  CostYearInput,
  SubmitButton,
  PhoneLogo,
  PhoneForm,
  PhoneContainerDiv,
} from "../App.styles";
import googleLogo from "../../src/assets/img/GoogleLogo.png";

const GooglePhone = () => {
  const [googlePrice, setGooglePrice] = useState(0);
  const [originalGooglePrice, setOriginalGooglePrice] = useState(0);
  const [googlePhoneCost, setGooglePhoneCost] = useState(0);
  const [yearGoogleBought, setGoogleYearBought] = useState(0);
  const [sharesGoogle, setGoogleShares] = useState(0);
  const [currentGoogleValue, setGoogleCurrentValue] = useState(0);
  const [gainLossGoogle, setGainLossGoogle] = useState(0);
  const [isClickedGoogle, setIsClickedGoogleGoogle] = useState(0);
  const [isValid, setIsValid] = useState(0);

  const getStockPrice = (stockRecords) => {
    let stockPrice;
    for (let stockYear of stockRecords) {
      if (stockYear.date.includes(yearGoogleBought.toString())) {
        stockPrice = stockYear["Stock Price"];
        break;
      }
    }
    return stockPrice;
  };

  const handlePhoneChange = (event) => {
    setGooglePhoneCost(event.target.value);
  };

  const handleYearChange = (event) => {
    setGoogleYearBought(event.target.value);
  };

  const handleSubmit = (event) => {
    if (yearGoogleBought >= 2009 && yearGoogleBought <= 2019) {
      let sharesBought = (googlePhoneCost / originalGooglePrice).toFixed(2);
      let currentWorth = (sharesBought * googlePrice).toFixed(2);
      let currentGain = (currentWorth - googlePhoneCost).toFixed(2);

      setGoogleCurrentValue(currentWorth);
      setGoogleShares(sharesBought);
      setGainLossGoogle(currentGain);
      setIsClickedGoogleGoogle(1);
      setIsValid(0);
      event.preventDefault();
    } else {
      setIsValid(1);
      event.preventDefault();
    }
  };

  axios
    .get("https://financialmodelingprep.com/api/v3/company/profile/GOOGL")
    .then((response) => {
      setGooglePrice(response.data.profile.price);
    })
    .catch((error) => {
      console.log(error);
    });

  axios
    .get("https://financialmodelingprep.com/api/v3/enterprise-value/GOOGL")
    .then((response) => {
      setOriginalGooglePrice(getStockPrice(response.data.enterpriseValues));
    })
    .catch((error) => {
      console.log(error);
    });

  return (
    <>
      <PhoneContainerDiv>
        <PhoneLogo src={googleLogo} alt=""></PhoneLogo>
        <PhoneForm onSubmit={handleSubmit}>
          <CostYearInput
            placeholder="Enter Year of Purchase"
            onChange={handleYearChange}
          />
          {isValid === 0 ? null : (
            <div>Please enter a year between 2009-2019!</div>
          )}
          <CostYearInput
            placeholder="Enter Purchase Cost"
            onChange={handlePhoneChange}
          />
          <SubmitButton type="submit" value="Submit">
            Submit
          </SubmitButton>
        </PhoneForm>

        {isClickedGoogle === 1 ? (
          <TextOutPutContainer>
            <TextOutputIndividual>
              Current Stock Price: ${googlePrice}
            </TextOutputIndividual>
            <TextOutputIndividual>
              Stock Price in {yearGoogleBought}: ${originalGooglePrice}
            </TextOutputIndividual>
            <br></br>
            <TextOutputIndividual>
              You Could Have Bought: {sharesGoogle} Shares
            </TextOutputIndividual>
            <TextOutputIndividual>
              Those Shares Are Now Worth: ${currentGoogleValue}
            </TextOutputIndividual>
            <br></br>
            <TextOutputIndividual>
              If you bought Stock instead of the phone, <br></br>
              your Gain(Loss) would be: ${gainLossGoogle}
            </TextOutputIndividual>
            <br></br>
            <TextOutputIndividual
              style={{ fontWeight: 200, fontSize: "large" }}
            >
              {gainLossGoogle > 0
                ? `You would have made more money buying stock. Was your
                  phone worth $${gainLossGoogle}?`
                : "Seems like you made the right choice buying the phone!"}
            </TextOutputIndividual>
          </TextOutPutContainer>
        ) : null}
      </PhoneContainerDiv>
    </>
  );
};

export default GooglePhone;

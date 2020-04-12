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

import appleLogo from "../../src/assets/img/AppleLogo.svg";

const ApplePhone = () => {
  const [applePrice, setApplePrice] = useState(0);
  const [originalApplePrice, setOriginalApplePrice] = useState(0);
  const [phoneCostApple, setPhoneCostApple] = useState(0);
  const [yearBoughtApple, setYearBoughtApple] = useState(0);
  const [sharesApple, setSharesApple] = useState(0);
  const [currentValueApple, setCurrentValueApple] = useState(0);
  const [gainLossApple, setGainLossApple] = useState(0);
  const [isClickedApple, setIsClickedApple] = useState(0);

  const getStockPrice = (stockRecords) => {
    let stockPrice;
    for (let stockYear of stockRecords) {
      if (stockYear.date.includes(yearBoughtApple.toString())) {
        stockPrice = stockYear["Stock Price"];
        break;
      }
    }
    return stockPrice;
  };

  const handlePhoneChange = (event) => {
    setPhoneCostApple(event.target.value);
  };

  const handleYearChange = (event) => {
    setYearBoughtApple(event.target.value);
  };

  const handleSubmit = (event) => {
    let sharesBought = (phoneCostApple / originalApplePrice).toFixed(2);
    let currentWorth = (sharesBought * applePrice).toFixed(2);
    let currentGain = (currentWorth - phoneCostApple).toFixed(2);

    setCurrentValueApple(currentWorth);
    setSharesApple(sharesBought);
    setGainLossApple(currentGain);
    setIsClickedApple(1);
    event.preventDefault();
  };

  axios
    .get("https://financialmodelingprep.com/api/v3/company/profile/AAPL")
    .then((response) => {
      setApplePrice(response.data.profile.price);
    })
    .catch((error) => {
      console.log(error);
    });

  axios
    .get("https://financialmodelingprep.com/api/v3/enterprise-value/AAPL")
    .then((response) => {
      setOriginalApplePrice(getStockPrice(response.data.enterpriseValues));
    })
    .catch((error) => {
      console.log(error);
    });

  return (
    <>
      <PhoneContainerDiv>
        <PhoneLogo src={appleLogo} alt=""></PhoneLogo>
        <PhoneForm onSubmit={handleSubmit}>
          <CostYearInput
            style={{ borderColor: "#f48fb1" }}
            placeholder="Enter Year of Purchase"
            onChange={handleYearChange}
          />
          <CostYearInput
            style={{ borderColor: "#f48fb1" }}
            placeholder="Enter Purchase Cost"
            onChange={handlePhoneChange}
          />
          <SubmitButton
            style={{
              background: "#f48fb1",
              color: "white",
            }}
            type="submit"
            value="Submit"
          >
            Submit
          </SubmitButton>
        </PhoneForm>
        {isClickedApple === 1 ? (
          <TextOutPutContainer>
            <TextOutputIndividual>
              Current Stock Price: ${applePrice}
            </TextOutputIndividual>
            <TextOutputIndividual>
              Stock Price in {yearBoughtApple}: ${originalApplePrice}
            </TextOutputIndividual>
            <br></br>
            <TextOutputIndividual>
              You Could Have Bought: {sharesApple} Shares
            </TextOutputIndividual>
            <TextOutputIndividual>
              Those Shares Are Now Worth: ${currentValueApple}
            </TextOutputIndividual>
            <br></br>
            <TextOutputIndividual>
              If you bought Stock instead of the phone, <br></br>
              your Gain(Loss) would be: ${gainLossApple}
            </TextOutputIndividual>
            <br></br>
            <TextOutputIndividual
              style={{ fontWeight: 200, fontSize: "large" }}
            >
              {gainLossApple > 0
                ? `You would have made more money buying stock. Was your
                    phone worth $${gainLossApple}?`
                : "Seems like you made the right choice buying the phone!"}
            </TextOutputIndividual>
          </TextOutPutContainer>
        ) : null}
      </PhoneContainerDiv>
    </>
  );
};

export default ApplePhone;

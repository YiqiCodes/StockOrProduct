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
import samsungLogo from "../../src/assets/img/SamsungLogo.png";

const SamsungPhone = () => {
  const [samsungPrice, setSamsungPrice] = useState(0);
  const [originalSamsungPrice, setOriginalSamsungPrice] = useState(0);
  const [phoneCostSamsung, setPhoneCostSamsung] = useState(0);
  const [yearBoughtSamsung, setYearBoughtSamsung] = useState(0);
  const [sharesSamsung, setSharesSamsung] = useState(0);
  const [currentValueSamsung, setCurrentValueSamsung] = useState(0);
  const [gainLossSamsung, setGainLossSamsung] = useState(0);
  const [isClickedSamsung, setIsClickedSamsung] = useState(0);
  const [isValid, setIsValid] = useState(0);

  const getStockPrice = (stockRecords) => {
    let stockPrice;
    for (let stockYear of stockRecords) {
      if (stockYear.date.includes(yearBoughtSamsung.toString())) {
        stockPrice = stockYear["Stock Price"];
        break;
      }
    }
    return stockPrice;
  };

  const handlePhoneChange = (event) => {
    setPhoneCostSamsung(event.target.value);
  };

  const handleYearChange = (event) => {
    setYearBoughtSamsung(event.target.value);
  };

  const handleSubmit = (event) => {
    if (yearBoughtSamsung >= 2009 && yearBoughtSamsung <= 2019) {
      let sharesBought = (phoneCostSamsung / originalSamsungPrice).toFixed(2);
      let currentWorth = (sharesBought * samsungPrice).toFixed(2);
      let currentGain = (currentWorth - phoneCostSamsung).toFixed(2);

      setCurrentValueSamsung(currentWorth);
      setSharesSamsung(sharesBought);
      setGainLossSamsung(currentGain);
      setIsClickedSamsung(1);
      setIsValid(0);
      event.preventDefault();
    } else {
      setIsValid(1);
      event.preventDefault();
    }
  };

  axios
    .get("https://financialmodelingprep.com/api/v3/company/profile/NDAQ")
    .then((response) => {
      setSamsungPrice(response.data.profile.price);
    })
    .catch((error) => {
      console.log(error);
    });

  axios
    .get("https://financialmodelingprep.com/api/v3/enterprise-value/NDAQ")
    .then((response) => {
      setOriginalSamsungPrice(getStockPrice(response.data.enterpriseValues));
    })
    .catch((error) => {
      console.log(error);
    });

  return (
    <>
      <PhoneContainerDiv>
        <PhoneLogo src={samsungLogo} alt=""></PhoneLogo>
        <PhoneForm onSubmit={handleSubmit}>
          <CostYearInput
            style={{ borderColor: "#6170fb" }}
            placeholder="Enter Year of Purchase"
            onChange={handleYearChange}
          ></CostYearInput>
          {isValid === 0 ? null : (
            <div>Please enter a year between 2009-2019!</div>
          )}
          <CostYearInput
            style={{ borderColor: "#6170fb" }}
            placeholder="Enter Purchase Cost"
            onChange={handlePhoneChange}
          />
          <SubmitButton
            // disabled={!isEnabled}
            style={{ background: "#6170fb", color: "white" }}
            type="submit"
            value="Submit"
          >
            Submit
          </SubmitButton>
        </PhoneForm>
        {isClickedSamsung === 1 ? (
          <TextOutPutContainer>
            <TextOutputIndividual>
              Current Stock Price: ${samsungPrice}
            </TextOutputIndividual>
            <TextOutputIndividual>
              Stock Price in {yearBoughtSamsung}: ${originalSamsungPrice}
            </TextOutputIndividual>
            <br></br>
            <TextOutputIndividual>
              You Could Have Bought: {sharesSamsung} Shares
            </TextOutputIndividual>
            <TextOutputIndividual>
              Those Shares Are Now Worth: ${currentValueSamsung}
            </TextOutputIndividual>
            <br></br>
            <TextOutputIndividual>
              If you bought Stock instead of the phone, <br></br>
              your Gain(Loss) would be: ${gainLossSamsung}
            </TextOutputIndividual>
            <br></br>
            <TextOutputIndividual
              style={{ fontWeight: 200, fontSize: "large" }}
            >
              {gainLossSamsung > 0
                ? `You would have made more money buying stock. Was your
                    phone worth $${gainLossSamsung}?`
                : "Seems like you made the right choice buying the phone!"}
            </TextOutputIndividual>
            <br></br>
            <TextOutputIndividual
              style={{ fontWeight: 100, fontSize: "small" }}
            >
              * The NASDAQ Composite was used as a proxy as Samsung is not
              traded on North American Markets.
            </TextOutputIndividual>
          </TextOutPutContainer>
        ) : null}
      </PhoneContainerDiv>
    </>
  );
};

export default SamsungPhone;

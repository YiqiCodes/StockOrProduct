// import React, { useState } from "react";
// import axios from "axios";

// // styles
// import {
//   TextOutPutContainer,
//   TextOutputIndividual,
//   CostYearInput,
//   SubmitButton,
//   PhoneLogo,
//   PhoneForm,
//   PhoneContainerDiv,
// } from "../App.styles";

// // logos
// import appleLogo from "../../src/assets/img/AppleLogo.svg";
// import googleLogo from "../../src/assets/img/GoogleLogo.png";
// import samsungLogo from "../../src/assets/img/SamsungLogo.png";

// const PhoneSelector = () => {
//   const [price, setPrice] = useState(0);
//   const [originalPrice, setOriginalPrice] = useState(0);
//   const [phoneCost, setPhoneCost] = useState(0);
//   const [yearBought, setYearBought] = useState(0);
//   const [shares, setShares] = useState(0);
//   const [currentValue, setCurrentValue] = useState(0);
//   const [gainLoss, setGainLoss] = useState(0);
//   const [isClicked, setIsClicked] = useState(0);
//   const [isCostValid, setIsCostValid] = useState(true);
//   const [isYearValid, setIsYearValid] = useState(true);

//   const phoneDetails = {
//     samsung: {
//       setPriceAPI:
//         "https://financialmodelingprep.com/api/v3/company/profile/NDAQ",
//       setOriginalPriceAPI:
//         "https://financialmodelingprep.com/api/v3/enterprise-value/NDAQ",
//       logo: samsungLogo,
//       color: "#6170fb",
//     },
//   };

//   const getStockPrice = (stockRecords) => {
//     let stockPrice;
//     for (let stockYear of stockRecords) {
//       if (stockYear.date.includes(yearBought.toString())) {
//         stockPrice = stockYear["Stock Price"];
//         break;
//       }
//     }
//     return stockPrice;
//   };

//   const handlePhoneChange = (event) => {
//     setPhoneCost(event.target.value);
//   };

//   const handleYearChange = (event) => {
//     setYearBought(event.target.value);
//   };

//   const handleSubmit = (event) => {
//     if (yearBought >= 2009 && yearBought <= 2019 && phoneCost > 0) {
//       let sharesBought = (phoneCost / originalPrice).toFixed(2);
//       let currentWorth = (sharesBought * price).toFixed(2);
//       let currentGain = (currentWorth - phoneCost).toFixed(2);

//       setCurrentValue(currentWorth);
//       setShares(sharesBought);
//       setGainLoss(currentGain);
//       setIsClicked(1);
//       setIsCostValid(true);
//       setIsYearValid(true);
//       event.preventDefault();
//     } else if (phoneCost <= 0 && yearBought >= 2009 && yearBought <= 2019) {
//       setIsCostValid(false);
//       setIsYearValid(true);
//       event.preventDefault();
//     } else if ((yearBought < 2009 || yearBought > 2019) && phoneCost > 0) {
//       setIsCostValid(true);
//       setIsYearValid(false);
//       event.preventDefault();
//     } else {
//       setIsCostValid(false);
//       setIsYearValid(false);
//       event.preventDefault();
//     }
//   };

//   axios
//     .get(phoneDetails.samsung.setPriceAPI)
//     .then((response) => {
//       setPrice(response.data.profile.price);
//     })
//     .catch((error) => {
//       console.log(error);
//     });

//   axios
//     .get(phoneDetails.samsung.setOriginalPriceAPI)
//     .then((response) => {
//       setOriginalPrice(getStockPrice(response.data.enterpriseValues));
//     })
//     .catch((error) => {
//       console.log(error);
//     });

//   return (
//     <>
//       <PhoneContainerDiv>
//         <PhoneLogo src={phoneDetails.samsung.logo} alt=""></PhoneLogo>
//         <PhoneForm onSubmit={handleSubmit}>
//           <CostYearInput
//             style={{ borderColor: phoneDetails.samsung.color }}
//             placeholder="Enter Year of Purchase"
//             onChange={handleYearChange}
//           ></CostYearInput>
//           {isYearValid === false ? (
//             <div>Please enter a year between 2009-2019!</div>
//           ) : null}
//           <CostYearInput
//             style={{ borderColor: phoneDetails.samsung.color }}
//             placeholder="Enter Purchase Cost"
//             onChange={handlePhoneChange}
//           />
//           {isCostValid === false ? (
//             <div>Please enter a positive value!</div>
//           ) : null}
//           <SubmitButton
//             style={{ background: phoneDetails.samsung.color, color: "white" }}
//             type="submit"
//             value="Submit"
//           >
//             Submit
//           </SubmitButton>
//         </PhoneForm>
//         {isClicked === 1 ? (
//           <TextOutPutContainer>
//             <TextOutputIndividual>
//               Current Stock Price: ${price}
//             </TextOutputIndividual>
//             <TextOutputIndividual>
//               Stock Price in {yearBought}: ${originalPrice}
//             </TextOutputIndividual>
//             <br></br>
//             <TextOutputIndividual>
//               You Could Have Bought: {shares} Shares
//             </TextOutputIndividual>
//             <TextOutputIndividual>
//               Those Shares Are Now Worth: ${currentValue}
//             </TextOutputIndividual>
//             <br></br>
//             <TextOutputIndividual>
//               If you bought Stock instead of the phone, <br></br>
//               your Gain(Loss) would be: ${gainLoss}
//             </TextOutputIndividual>
//             <br></br>
//             <TextOutputIndividual
//               style={{ fontWeight: 200, fontSize: "large" }}
//             >
//               {gainLoss > 0
//                 ? `You would have made more money buying stock. Was your
//                     phone worth $${gainLoss}?`
//                 : "Seems like you made the right choice buying the phone!"}
//             </TextOutputIndividual>
//             <br></br>
//             <TextOutputIndividual
//               style={{ fontWeight: 100, fontSize: "small" }}
//             >
//               * The NASDAQ Composite was used as a proxy as Samsung is not
//               traded on North American Markets.
//             </TextOutputIndividual>
//           </TextOutPutContainer>
//         ) : null}
//       </PhoneContainerDiv>
//     </>
//   );
// };

// export default PhoneSelector;

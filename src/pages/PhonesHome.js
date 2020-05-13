import React from "react";
import { Link } from "react-router-dom";

import {
  ProductSelectorContainer,
  PhoneLogoContainer,
  WhichPhoneWrapper,
  WhichPhoneLogo,
  HeaderText,
  OtherText,
  ProductMainButton,
} from "../App.styles";
import appleLogo from "../../src/assets/img/AppleLogo.svg";
import googleLogo from "../../src/assets/img/GoogleLogo.png";
import samsungLogo from "../../src/assets/img/SamsungLogo.png";

const PhonesHome = () => {
  return (
    <>
      <WhichPhoneWrapper>
        <ProductSelectorContainer>
          <HeaderText>What brand is your Phone?</HeaderText>
          <PhoneLogoContainer>
            <Link to="/phones/apple">
              <WhichPhoneLogo src={appleLogo} alt=""></WhichPhoneLogo>
            </Link>
            <Link to="/phones/google">
              <WhichPhoneLogo src={googleLogo} alt=""></WhichPhoneLogo>
            </Link>
            <Link to="/phones/samsung">
              <WhichPhoneLogo src={samsungLogo} alt=""></WhichPhoneLogo>
            </Link>
            <Link to="/phones/other">
              <OtherText>Other</OtherText>
            </Link>
          </PhoneLogoContainer>
          <Link to="/laptops">
            <ProductMainButton>Next Product</ProductMainButton>
          </Link>
        </ProductSelectorContainer>
      </WhichPhoneWrapper>
    </>
  );
};

export default PhonesHome;

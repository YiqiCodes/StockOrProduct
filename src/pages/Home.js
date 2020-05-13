import React from "react";
import { Link } from "react-router-dom";

import {
  ProductSelectorContainer,
  WhichPhoneWrapper,
  HomeContentContainer,
  HeaderText,
  ProductMainButton,
} from "../App.styles";

const Home = () => {
  return (
    <>
      <WhichPhoneWrapper>
        <ProductSelectorContainer>
          <HomeContentContainer>
            <HeaderText>
              Welcome to "Stock or Product?"
              <br></br>
              <br></br>
              Should you have bought that product or stock from the company?
              <br></br>
              <br></br>
              Let's find out!
            </HeaderText>
            <Link to="/phones">
              <ProductMainButton>Begin</ProductMainButton>
            </Link>
          </HomeContentContainer>
        </ProductSelectorContainer>
      </WhichPhoneWrapper>
    </>
  );
};

export default Home;

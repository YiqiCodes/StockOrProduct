import styled from "styled-components";

export const PageWrapper = styled.div``;

export const WhichPhoneWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-width: 100vw;
  min-height: 100vh;
  max-height: 100vh;
  background: #36454f;
  color: white;
`;

export const PhoneSelectorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

export const PhoneLogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  height: 60vh;
  width: 100%;
`;

export const WhichPhoneLogo = styled.img`
  max-height: 10rem;
  max-width: 10rem;
`;

export const HeaderText = styled.div`
  margin-bottom: 1rem;
  text-align: center;
  font-weight: 500;
  font-size: larger;
`;

// Phone Styles
export const PhoneContainerDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background: #36454f;
`;
export const PhoneLogo = styled.img`
  max-height: 5rem;
  margin: 1rem 0rem;
`;

export const PhoneForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export const CostYearInput = styled.input`
  margin: 1rem;
  min-width: 100%;
  min-height: 100%;
  border: solid 2px #9c8479;
  border-radius: 8px;
  background: #e9e9e9;
  text-align: center;
  font-size: larger;
`;

export const SubmitButton = styled.button`
  min-height: 2rem;
  min-width: 5rem;
  border: solid 1px white;
  background: #4f403a;
  border-radius: 5px;
  margin: 1rem;
  color: white;
`;

export const GoBackButton = styled.button`
  width: 10rem;
  padding: 0 30px;
  min-height: 40px;
  margin: 1rem;
  color: white;
  background: #9c8479;
  border-radius: 10px;
  border: 1px solid white;
`;

export const TextOutputIndividual = styled.div`
  text-align: center;
  font-weight: 100;
  font-size: medium;
`;

export const TextOutPutContainer = styled.div`
  padding: 1rem;
  margin: 1rem;
  border: 2px solid;
  border-radius: 8px;
  color: white;
`;

export const ErrorText = styled.div`
  color: red;
`;

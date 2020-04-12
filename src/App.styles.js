import styled, { keyframes } from "styled-components";

export const PageWrapper = styled.div``;

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
`;

const animationName = keyframes`{
  0%{background-position:0% 50%}
  50%{background-position:100% 50%}
  100%{background-position:0% 50%}
}`;

export const WhichPhoneWrapper = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  position: absolute;
  z-index: -1;
  min-width: 100vw;
  min-height: 100vh;
  background: linear-gradient(270deg, #000000, #ffffff);
  color: white;
  background-size: 400% 400%;
  animation: ${animationName} 10s ease infinite;
`;

export const ApplePhoneWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  align-items: center;
  justify-content: center;
  position: absolute;
  z-index: -1;
  min-width: 100vw;
  min-height: 100vh;
  background: linear-gradient(270deg, #000000, #d8d8d8);
  color: white;
  background-size: 400% 400%;
  animation: ${animationName} 10s ease infinite;
`;

export const GooglePhoneWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  align-items: center;
  justify-content: center;
  position: absolute;
  z-index: -1;
  min-width: 100vw;
  min-height: 100vh;
  background: linear-gradient(270deg, #000000, #d8d8d8);
  color: white;
  background-size: 400% 400%;
  animation: ${animationName} 10s ease infinite;
`;

export const SamsungPhoneWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  align-items: center;
  justify-content: center;
  position: absolute;
  z-index: -1;
  min-width: 100vw;
  min-height: 100vh;
  background: linear-gradient(270deg, #000000, #d8d8d8);
  color: white;
  background-size: 400% 400%;
  animation: ${animationName} 10s ease infinite;
`;

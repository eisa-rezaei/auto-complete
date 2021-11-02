import styled, { keyframes } from "styled-components";

const rotate = keyframes`
form{
  transform: rotate(0deg);
}
to{
  transform: rotate(360deg);

}
`;

export const StLoadingContainer = styled.section`
  min-width: 100vw;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StLoadingSpinner = styled.div`
  width: 70px;
  height: 70px;
  border-radius: 50%;
  border: 2px solid #f0f0f0;
  border-top: 3px solid green;
  animation: ${rotate} 0.5s linear infinite;
`;

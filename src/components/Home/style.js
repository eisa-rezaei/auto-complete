import styled from "styled-components";

export const StHomeContainer = styled.section`
  width: 100%;
  min-height: 800px;
  padding: 8vh 10vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  overflow: hidden;
  background-color: #fff;
  transition: all 0.5s;
  :hover {
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
  }

  & h3 {
    margin-bottom: 10px;
    align-self: center;
    letter-spacing: 2px;
    text-transform: uppercase;
  }

  @media (max-width: 700px) {
    padding: 5vh 5vw;
  }
`;

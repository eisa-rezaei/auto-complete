import styled from "styled-components";

export const StHomeContainer = styled.section`
  width: 100%;
  height: 500px;
  padding: 8vh 10vw;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  overflow: hidden;
  background-color: #fff;
  transition: all 0.5s;
  :hover {
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
  }

  @media (max-width: 700px) {
    padding: 5vh 5vw;
  }
`;
export const StInputsContainer = styled.div`
  width: 100%;
  min-height: 60vh;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  & input {
    min-width: 100%;
    padding: 10px;
    border-bottom: 2px solid #e0eeee;
    :hover,
    :focus {
      border-bottom: 2px solid #00dd00;
    }
  }
  & h3 {
    margin-bottom: 10px;
    align-self: center;
    letter-spacing: 2px;
    text-transform: uppercase;
  }
`;

export const StInputAddedList = styled.ul`
  width: 100%;
  height: clamp(30px, 60px);
  margin: 10px 0;
  border: 1px solid #f0ffff;
  display: flex;
  align-self: center;
  flex-wrap: wrap;
`;

export const StInputAddedListItem = styled.ul`
  height: 30px;
  padding: 5px;
  font-size: 0.8rem;
  display: flex;
  align-items: center;
  margin-right: 10px;
  border: 1px solid saddlebrown;
  background-color: #f0f0f0;
  & svg {
    color: #ffaaaa;
    align-self: center;
    cursor: pointer;
  }
`;

export const StInputsResult = styled.ul`
  width: 100%;
  height: 300px;
  padding: 10px;
  height: auto;
  overflow: auto;
`;
export const StInputsResultItem = styled.li`
  height: auto;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${(props) => (props.isSelected ? `#f5fcf8` : `#fff`)};
  & svg {
    color: #00dd00;
  }
  :hover {
    background-color: #f5f8fb;
    cursor: pointer;
  }
`;

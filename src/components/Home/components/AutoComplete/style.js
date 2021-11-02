import styled from "styled-components";

export const StInputsContainer = styled.div`
  width: 100%;
  min-height: ${(props) => (props.disabled ? `auto` : `120px`)};
  height: auto;
  margin: 10px 0;
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  & input {
    min-width: 100%;
    cursor: ${(props) => (props.disabled ? `not-allowed` : `text`)};
    padding: 10px;
    border-bottom: 2px solid #e0eeee;
    :hover,
    :focus {
      border-bottom: 2px solid #00dd00;
    }
  }
  & h4 {
    letter-spacing: 1px;
    margin-bottom: 5px;
  }
`;

export const StAllResults = styled.div`
  width: 100%;
  max-height: 180px;
  top: 60px;
  overflow: auto;
  position: absolute;
  z-index: 2;
  border: 2px solid #e0eeee;
  border-top: 0px;
`;

export const StInputAddedList = styled.ul`
  width: 100%;
  height: 30px;
  margin-top: 10px;
  background-color: #fff;
  display: flex;
  align-self: center;
  flex-wrap: wrap;
  border: 1px solid #f0ffff;
`;

export const StInputAddedListItem = styled.li`
  height: 30px;
  padding: 5px;
  font-size: 0.7rem;
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
  background-color: #fff;
`;
export const StInputsResultItem = styled.li`
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

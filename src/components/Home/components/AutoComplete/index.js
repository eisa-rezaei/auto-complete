import React, { useEffect, useRef, useState } from "react";
import { AiOutlineCheck } from "react-icons/ai";
import { MdClose } from "react-icons/md";
import { useOnClickOutside } from "../../../Hook/useOnClickOutside";
import {
  StAllResults,
  StInputAddedList,
  StInputAddedListItem,
  StInputsContainer,
  StInputsResult,
  StInputsResultItem,
} from "./style";

const AutoComplete = ({
  initialData,
  defaultSelected,
  initialSearchPlaceHolder,
  title,
  disabled,
}) => {
  const [data, setData] = useState(initialData);
  const [selected, setSelected] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState(false);

  useEffect(() => {
    const newArr = initialData?.map((item) => {
      const condition = defaultSelected?.some(
        (i) => i === item?.title?.toLowerCase()
      );
      if (condition) {
        item.isSelected = true;
        setSelected((prev) => [...prev, item.title]);
      }
      return item;
    });
    setData(newArr);
  }, [defaultSelected, initialData]);

  const ref = useRef();
  useOnClickOutside(ref, () => setResults(false));

  const setSelectedHandler = (name) => () => {
    const newArr = data.map((item) => {
      if (item.title === name && !item.isSelected) {
        item.isSelected = true;
        setSelected([...selected, item.title]);
      }
      return item;
    });
    setData(newArr);
    setSearchTerm("");
  };

  const removeSelectedHandler = (name) => () => {
    const newArr = selected.filter((item) => item !== name);
    const newListArr = data.map((item) => {
      if (item.title === name && item.isSelected) {
        item.isSelected = false;
      }
      return item;
    });
    setSelected(newArr);
    setData(newListArr);
    setSearchTerm("");
  };

  return (
    <StInputsContainer ref={ref} disabled={disabled}>
      <h4>{title}</h4>
      <input
        placeholder={
          (disabled && "This input is Disabled") ||
          `${initialSearchPlaceHolder}` ||
          "search Here ..."
        }
        onChange={(e) => !disabled && setSearchTerm(e.target.value)}
        onClick={() => setResults(true)}
        value={searchTerm}
      />
      <StInputAddedList>
        {selected?.map((item, index) => (
          <StInputAddedListItem key={index}>
            {item}
            <MdClose onClick={!disabled && removeSelectedHandler(item)} />
          </StInputAddedListItem>
        ))}
      </StInputAddedList>
      {results && !disabled ? (
        <StAllResults>
          <StInputsResult>
            {data
              ?.filter(
                ({ title, keyWords }) =>
                  title.toLowerCase().indexOf(searchTerm.toLowerCase()) >= 0 ||
                  keyWords?.indexOf(searchTerm) >= 0
              )
              .map(({ title, isSelected }, index) => (
                <StInputsResultItem
                  key={index}
                  onClick={
                    isSelected && !disabled
                      ? removeSelectedHandler(title)
                      : setSelectedHandler(title)
                  }
                  isSelected={isSelected}
                >
                  {title}
                  {isSelected ? <AiOutlineCheck /> : null}
                </StInputsResultItem>
              ))}
          </StInputsResult>
        </StAllResults>
      ) : null}
    </StInputsContainer>
  );
};

export default AutoComplete;

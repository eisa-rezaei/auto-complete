import React, { useState, useRef } from "react";

import { MdClose } from "react-icons/md";
import { AiOutlineCheck } from "react-icons/ai";

import { useOnClickOutside } from "../Hook/useOnClickOutside";

import {
  StHomeContainer,
  StInputAddedList,
  StInputAddedListItem,
  StInputsContainer,
  StInputsResult,
  StInputsResultItem,
} from "./style";

const LIST_ITEMS = [
  { title: "BTC", isSelected: false, keyWords: "bitcoin بیت کوین" },
  { title: "ETH", isSelected: false, keyWords: "etherum اتریوم" },
  { title: "DOGE", isSelected: false, keyWords: "doge coin دوج کوین" },
  { title: "BNB", isSelected: false, keyWords: "binance coin بایننس کوین" },
  { title: "RTX", isSelected: false, keyWords: "tron ترون" },
  { title: "XRP", isSelected: false, keyWords: "ripple ریپل" },
];

const Home = () => {
  const [coinList, setCoinList] = useState(LIST_ITEMS);
  const [results, setResults] = useState(false);
  const [selected, setSelected] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const ref = useRef();
  useOnClickOutside(ref, () => setResults(false));

  const setSelectedHandler = (name) => () => {
    const newArr = coinList.map((item) => {
      if (item.title === name && !item.isSelected) {
        item.isSelected = true;
        setSelected([...selected, item.title]);
      }
      return item;
    });
    setCoinList(newArr);
    setSearchTerm("");
  };

  const removeSelectedHandler = (name) => () => {
    const newArr = selected.filter((item) => item !== name);
    const newListArr = coinList.map((item) => {
      if (item.title === name && item.isSelected) {
        item.isSelected = false;
      }
      return item;
    });
    setSelected(newArr);
    setCoinList(newListArr);
    setSearchTerm("");
  };

  return (
    <StHomeContainer>
      <StInputsContainer ref={ref}>
        <h3>Auto Complete</h3>
        <input
          placeholder="Search Here ... (EN/FA)"
          onChange={(e) => setSearchTerm(e.target.value)}
          onClick={() => setResults(true)}
          value={searchTerm}
          autoFocus
        />
        <StInputAddedList>
          {selected?.map((item, index) => (
            <StInputAddedListItem key={index}>
              {item}
              <MdClose onClick={removeSelectedHandler(item)} />
            </StInputAddedListItem>
          ))}
        </StInputAddedList>
        {results ? (
          <StInputsResult>
            {coinList
              .filter(
                ({ title, keyWords }) =>
                  title.toLowerCase().indexOf(searchTerm.toLowerCase()) >= 0 ||
                  keyWords?.indexOf(searchTerm) >= 0
              )
              .map(({ title, isSelected }, index) => (
                <StInputsResultItem
                  key={index}
                  onClick={setSelectedHandler(title)}
                  isSelected={isSelected}
                >
                  {title}
                  {isSelected ? <AiOutlineCheck /> : null}
                </StInputsResultItem>
              ))}
          </StInputsResult>
        ) : null}
      </StInputsContainer>
    </StHomeContainer>
  );
};

export default Home;

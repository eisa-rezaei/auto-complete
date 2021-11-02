import React from "react";
import { LIST_ITEMS, LIST_ITEMS_2, LIST_ITEMS_3 } from "../../data";
import AutoComplete from "./components/AutoComplete";

import { StHomeContainer } from "./style";

const Home = () => {
  return (
    <StHomeContainer>
      <h3>Auto Complete</h3>
      <AutoComplete
        initialData={LIST_ITEMS}
        defaultSelected={["btc", "eth"]}
        initialSearchPlaceHolder={"Crypto Search ..."}
        title={"Crypto"}
      />
      <AutoComplete
        initialData={LIST_ITEMS_2}
        defaultSelected={["apple", "tomato"]}
        initialSearchPlaceHolder={"Fruits Search..."}
        title={"Fruits"}
      />
      <AutoComplete
        initialData={LIST_ITEMS_3}
        defaultSelected={["iran", "iraq"]}
        initialSearchPlaceHolder={"Countries Search ..."}
        title={"Countries"}
      />
      <AutoComplete title={"Disabled Input"} disabled />
    </StHomeContainer>
  );
};

export default Home;

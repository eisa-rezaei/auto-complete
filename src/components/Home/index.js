import React from "react";
import { LIST_ITEMS, LIST_ITEMS_2, LIST_ITEMS_3 } from "../../data";
import AutoComplete from "./components/AutoComplete";

import { StHomeContainer } from "./style";

const Home = () => {
  return (
    <StHomeContainer>
      <h3>Auto Complete</h3>
      <AutoComplete
        initialData={LIST_ITEMS_2}
        initialSearchPlaceHolder={"Fruits Search..."}
        title={"Small list"}
      />
      <AutoComplete
        initialData={LIST_ITEMS_3}
        defaultSelected={["iran", "iraq"]}
        initialSearchPlaceHolder={"Countries Search ..."}
        title={"Large List"}
      />
      <AutoComplete
        initialData={LIST_ITEMS}
        defaultSelected={["btc", "eth"]}
        initialSearchPlaceHolder={"Crypto Search ..."}
        title={"Default Selected Values"}
      />
      <AutoComplete title={"Disabled Input"} disabled />
      <AutoComplete
        title={"Disabled Input with Default Selected Values"}
        disabled
        initialData={LIST_ITEMS_3}
        defaultSelected={["iran", "iraq"]}
      />
    </StHomeContainer>
  );
};

export default Home;

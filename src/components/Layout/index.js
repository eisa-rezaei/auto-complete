import React from "react";
import { GlobalStyles, StLayoutContainer } from "./style";

const Layout = ({ children }) => {
  return (
    <StLayoutContainer>
      {children}
      <GlobalStyles />
    </StLayoutContainer>
  );
};

export default Layout;

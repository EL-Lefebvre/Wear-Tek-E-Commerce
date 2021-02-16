import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import MapSection from './Map'

import styled from "styled-components";
import Body from "./Body";
import Footer from "./Footer";
import Header from "./Header";
import { createBrowserHistory } from 'history';
import { useHistory } from 'react-router-dom';

import GlobalStyles from "../GlobalStyles";

function App() {
  const historyInstance = createBrowserHistory();
  const history = useHistory();
  return (
    <Router history={historyInstance}>
      <Wrapper>
        <Header />
        <Body />
        <Footer />
      </Wrapper>
      <GlobalStyles />
    </Router>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export default App;

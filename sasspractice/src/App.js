import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";

import { GlobalStyle } from "./style/GlobalStyle";

import * as Page from "./pages";

const App = () => {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Page.MainPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

import React from "react";
import { Route, Routes } from "react-router-dom";

import Header from "./components/Header";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Cart from "./pages/Cart";

import "./scss/app.scss";

export const SearchContext = React.createContext();

function App() {
  const [seacrhValue, setseacrhValue] = React.useState("");

  return (
    <div className="wrapper">
      <SearchContext.Provider value={{ seacrhValue, setseacrhValue }}>
        <Header />
        <div className="content">
          <Routes>
            <Route path="" exact element={<Home />} />
            <Route path="*" exact element={<NotFound />} />
            <Route path="cart" exact element={<Cart />} />
          </Routes>
        </div>
      </SearchContext.Provider>
    </div>
  );
}

export default App;

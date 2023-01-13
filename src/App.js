import React from "react";
import { Route, Routes } from "react-router-dom";

import Header from "./components/Header";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Cart from "./pages/Cart";

import "./scss/app.scss";

function App() {
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <div className="container">
          <Routes>
            <Route path="" exact element={<Home />} />
            <Route path="*" exact element={<NotFound />} />
            <Route path="Cart" exact element={<Cart />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;

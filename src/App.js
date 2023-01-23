import React from "react";

import { Route, Routes } from "react-router-dom";

import Header from "./components/Header";

import Home from "./pages/Home";
import Cart from "./pages/Cart";
import FullPizza from "./pages/FullPizza";
import NotFound from "./pages/NotFound";

import "./scss/app.scss";

function App() {
  return (
    <div className="wrapper">
        <Header />
        <div className="content">
          <Routes>
            <Route path="" exact element={<Home />} />
            <Route path="*" exact element={<NotFound />} />
            <Route path="pizza/:id" exact element={<FullPizza />} />
            <Route path="cart" exact element={<Cart />} />
          </Routes>
        </div>
    </div>
  );
}

export default App;

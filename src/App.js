import React from "react";
import { Route, Routes } from "react-router-dom";

import Header from "./components/Header";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Cart from "./pages/Cart";

import "./scss/app.scss";

function App() {
  const [seacrhValue, setseacrhValue] = React.useState("");

  return (
    <div className="wrapper">
      <Header seacrhValue={seacrhValue} setseacrhValue={setseacrhValue} />
      <div className="content">
        <Routes>
          <Route path="" exact element={<Home seacrhValue={seacrhValue} />} />
          <Route path="*" exact element={<NotFound />} />
          <Route path="cart" exact element={<Cart />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;

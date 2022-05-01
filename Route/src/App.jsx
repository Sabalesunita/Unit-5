// import { useState } from 'react'
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Nav } from "./components/Nav";
import { Sell } from "./components/Sell";
import { Start } from "./components/Start";
import { Market } from "./components/Market";
import { Manage } from "./components/manage";
import { Price } from "./components/Price";
import { Learn } from "./components/Learn";
import { Login } from "./components/Login";
function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/start" element={<Start />}></Route>
        <Route path="/sell" element={<Sell />}></Route>
        <Route path="/market" element={<Market />}></Route>
        <Route path="/manage" element={<Manage />}></Route>
        <Route path="/price" element={<Price />}></Route>
        <Route path="/learn" element={<Learn />}></Route>
        <Route path="/login" element={<Login />}></Route>
      </Routes>
    </div>
  );
}

export default App;

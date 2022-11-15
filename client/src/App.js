import React, {useState, useEffect} from 'react';
import { Switch, Route, Routes } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import './App.css';
import Navbar from "./Navbar"
import Home from "./Home"
import Login from "./Login"
import RentAGame from "./RentAGame"
import MyRentals from "./MyRentals"

function App() {

  return (
    <div className="App">
      <Router>
      <header className="App-header">
        <Navbar />
      </header>
        <Switch>
          <Route exact path="/"><Home /></Route>
          <Route path="/login"><Login /></Route>
          <Route path="rentagame"><RentAGame /></Route>
          <Route path="/myrentals"><MyRentals /></Route>
          </Switch>
        </Router>
      <p className="HomeTitle">GameHub</p>
      <p className="HomeText">We gonna put a big image here</p>
      <p className="HomeText">Top 5 games</p>
    </div>
  );
}

export default App;

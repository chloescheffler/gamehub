import React, {useState, useEffect} from 'react';
import { Switch, Route } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import './App.css';
import Navbar from "./Navbar"
import Home from "./Home"
import Login from "./Login"
import RentAGame from "./RentAGame"
import MyRentals from "./MyRentals"
import Me from "./Me"
import SignUp from "./SignUp"

function App() {
  const [games,setGames]= useState([]);
  const [user, setUser] = useState(false);
  const [logout, setLogout] = useState("");
  const [login, setLogin] = useState('');
  const [rentals, setRentals] = useState([])
  const [rented, setRented] = useState(false)

  useEffect(() => {
    fetch("/games")
    .then((res) => res.json())
    .then((data) => setGames(data))
  },[])

  useEffect(() => {
    fetch("/rentals")
    .then((res) => res.json())
    .then((data) => setRentals(data))
  },[])
  console.log(rentals)
  // let userRentals = [...rentals]
  // let addedRental = []

  // const [user, setUser] = useState(null);

  // useEffect(() => {
  //   fetch("/me").then((response) => {
  //     if (response.ok) {
  //       response.json().then((user) => setUser(user));
  //     }
  //   });
  // }, []);

  if (!user) {
    return <Login setLogin={onLogin} />
  } else {
    <h2>Welcome, {user.name}!</h2>
  }
  function onLogin(user) {
    setUser(user);
  }

  function onLogout() {
    setUser("");
  }
  return (
    <div className="App">
      <Router>
      <header className="App-header">
        <Navbar user={user} setUser={setUser} setLogout={setLogout}/>
      </header>
      <p className="font-effect-fire-animation">GameHub</p>
      <Switch>
        <Route path="/me"><Me /></Route>
        <Route path="/login"><Login setLogin={setUser}/></Route>
        <Route path="/RentAGame"><RentAGame games={games} rented={rented} setRented={setRented} /></Route>
        <Route path="/MyRentals"><MyRentals rentals = {rentals} setRentals={setRentals}/></Route>
        <Route path="/SignUp"><SignUp setLogin={setUser} user={user} /></Route>
        <Route exact path="/"><Home games={games} onLogout={onLogout}/></Route>
      </Switch>
      </Router>
    </div>
  );
}

export default App;

import React from 'react';
import { NavLink } from "react-router-dom";

function Navbar({ user, setUser, setLogout }) {
    function handleLogout() {
        setLogout()
        fetch("/logout", {
          method: "DELETE",
        })
        .then(res => {
          console.log(res);
          if (res.ok) {
          
          }
        })
      }
    
    return(
    <header className="navHeader">
      <div className="logoutButtonDiv">
        {user && <span className="usernameSpan">Welcome, {user.name}!</span>}
        { user ? <button className="logoutButton" onClick={handleLogout}>Logout</button> : null} 
      </div>
    <div className="NavDiv">
        <NavLink className="nav" style={{ marginRight: "10px" }} exact to="/" >Home</NavLink>
        <NavLink className="nav" style={{ marginRight: "10px" }} to="/RentAGame" >Rent-A-Game</NavLink>
        <NavLink className="nav" style={{ marginRight: "10px" }} to="/MyRentals" >My Rentals</NavLink>
        {user ? null : <NavLink className="nav" style={{ marginRight: "10px" }} to="/Login" >Login</NavLink> }
        {user ? null : <NavLink className="nav" style={{ marginRight: "10px" }} to="/SignUp" >SignUp</NavLink>}
    </div>
    </header>
    )
}

export default Navbar;
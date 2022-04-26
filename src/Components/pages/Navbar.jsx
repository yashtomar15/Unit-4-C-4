import { useContext } from "react";
import { NavLink ,Link } from "react-router-dom";
import styled from "styled-components";
import { AuthContext } from "../context/AuthContext";
import './style.css';


export const Navbar = () => {
 
    const Navwrap=styled.nav`
    display:flex;
    justify-content:space-between;
    width:30%;
    height:50px;
    margin:auto;
    background-color:pink;
    `
  const { token } = useContext(AuthContext);
  // use token to chnage the text from Login to Logout once logged in successfully
 
  return (
    <>
      <nav className="navbar">
          <Navwrap>
        <NavLink className='pages' to="/Home">Home</NavLink >
        <NavLink className='pages' to="/About">About</NavLink >
        <NavLink className='pages' to="/Books">Books</NavLink >
        {!token ? (
        <NavLink className='pages' to="/Login">Login</NavLink >): (
        <NavLink className='pages' to="/Logout">Logout</NavLink >)}
        </Navwrap>
      </nav>

    </>
  );
}
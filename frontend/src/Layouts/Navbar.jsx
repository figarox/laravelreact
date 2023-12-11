import React, { useState } from "react";
import "../Style/dashboard.css";
import { useStateContext } from "../Contexts/ContextProvider";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const { currentUser } = useStateContext();

  return (
    <div className="navbar">
      <div className="logo"></div>

      <ul className="navbar-nav">
        <li>
          <button>Dashboard</button>
        </li>
        <li>
          <button>Products</button>
        </li>
      </ul>

      <div className="dropdown-container">
        <button onClick={toggleDropdown} className="dropdown-button">
          {isOpen ? (
            <ion-icon id="close-menu" name="person-outline"></ion-icon>
          ) : (
            <ion-icon id="open-menu" name="person-outline"></ion-icon>
          )}
        </button>
        <div className={`dropdown-content ${isOpen ? "show" : ""}`}>
          <a href="/settings">Ustawienia</a>
          <a href="/logout">Wyloguj</a>
        </div>
      </div>
    </div>
  );
}

import React, { useState } from 'react'
import '../Style/dashboard.css'
import { useStateContext } from '../Contexts/ContextProvider'

export default function Navbar() {

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
    const { currentUser } = useStateContext();


  return (
    <div className='navbar'>
        <div className='logo'></div>

        <ul className="navbar-nav">
            <li><button>Dashboard</button></li>
            <li><button>Products</button></li>
        </ul>

        <div className='circleAccout' onClick={toggleMenu}>
            <ion-icon id="person-outline" name="person-outline"></ion-icon>
        </div>
        {isOpen && (
                <div className='toggleMenu'>
                   <ul className="dropdown-menu">
                   <div className='informationAccount'>
                       <h2>{currentUser.name}</h2> 
                    </div>
                          <li>-------</li>
                          <li>-------</li>
                          <li>Wyloguj</li>
                    </ul>
                    <div className='circleAccout' onClick={toggleMenu}>
                        <ion-icon id="person-outline" name="person-outline"></ion-icon>
                    </div>
                </div>
            )}
   
    </div>
  )
}

import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
    <header>
        <h1>Flights For Every Destinations</h1>
        <h4>We only fly the hottest people to the hottes destinations</h4>
        <nav>
            <NavLink to="/Airplanes" >
                Planes
            </NavLink>

            <NavLink to="/flights">
                Flights
            </NavLink>

            <NavLink to= "/user">
               Admin
            </NavLink>
        </nav>
    </header>
);

export default Header;
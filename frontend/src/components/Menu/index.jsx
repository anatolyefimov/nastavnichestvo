import React from 'react';
import { NavLink } from "react-router-dom";

import navbar from '../navbar/navbar'

import './Menu.css';

function Menu() {
    const nav = navbar.map(el => {
        return (
            <NavLink className="navbar_link" to={el.path} key={el.id}>{el.name}</NavLink>
        );
    });
    return (
        <div className="navbar">
            {nav}
        </div>
    );
}

export default Menu;

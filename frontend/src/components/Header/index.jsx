import React from 'react'

import './Header.css'
import logo from './logo.png'

function Header() {
    return (
        <div className="Header">
            <a className="Header_link" href="http://www.sgdeti.ru/" target="_blank">
                <img className="Header_link__img img"
                     src={logo} alt=""/>
                <h3 className="Header_link__title">Солнечный город</h3>
            </a>
        </div>
    );
}

export default Header;

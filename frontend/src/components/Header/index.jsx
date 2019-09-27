import React from 'react'
import { NavLink } from "react-router-dom";


import './Header.css'
import logo from './logo.png'

import routes from 'routes'

function Header() {
    const links = routes.map(r =>
        <NavLink key={r.id} className="Header_navlinks Header_navlinks__size-small Header_navlinks__color" to={r.path}>{r.text}</NavLink>
    );

    return (
        <div className="Header">
            <a className="Header_link Header_link__black" href="http://www.sgdeti.ru/" rel="noopener noreferrer" target="_blank">
                <img className="Header_img img"
                     src={logo} alt=""/>
                <div className="Header_title-container">
                    <h3 className="Header_title Header_title__size-big">Солнечный город</h3>
                    <h3 className="Header_title-about Header_title-about__size-small">Детский благотворительный фонд</h3>
                </div>
            </a>
            <div className="Header_links-container">
                {links}
            </div>
        </div>
    );
}

export default Header;

import React from 'react'

import './Footer.css'

import logo from '../Header/logo.png'

function Footer() {
    const links = [
        {
            id: 1,
            icon: 'fa fa-vk',
            link: 'https://vk.com/club11875198'
        },
        {
            id: 2,
            icon: 'fa fa-facebook-official',
            link: 'https://new.vk.com/club11875198',
        },
        {
            id: 3,
            icon: 'fa fa-instagram',
            link: 'https://www.instagram.com/sgdeti',
        },
        {
            id: 4,
            icon: 'fa fa-youtube',
            link: 'https://www.youtube.com/user/SunCityLiferu'
        },
    ].map(el => {
        return (<a key={el.id}
                  target="_blank" rel="noopener noreferrer"
                  href={el.link}>
            <i className={el.icon + ' footer_media'} aria-hidden="true"> </i>
        </a>);
    });


    return (
        <div className="footer">
            <a className="footer_link footer__black" href="http://www.sgdeti.ru/" rel="noopener noreferrer" target="_blank">
                <img className="footer_img img"
                     src={logo} alt=""/>
                <div className="footer_title-container">
                    <h3 className="footer_title footer_title__size-small">Солнечный город</h3>
                    <h3 className="footer_title-about footer_title-about__size-small">Детский благотворительный фонд</h3>
                </div>
            </a>
            {links}
        </div>
    );
}

export default Footer;

import React from 'react'
import { NavLink } from "react-router-dom";

import './Mentoring.css'
import woman from './woman.png'
import desktop from './desktop.png'
import book from './book.png'
import social from './social.png'

function Mentoring() {
    const about = [
        {
            id: 1,
            logo: woman,
            title: 'ПРОФЕССИОНАЛЬНЫЕ ПСИХОЛОГИ',
            description: 'Проект сопровождают\n' +
                'профессиональные психологи,\n' +
                'которые несколько раз в месяц\n' +
                'проводят с участниками\n' +
                'групповые и индивидуальные\n' +
                'супервизии, оценивают работу\n' +
                'наставников, дают\n' +
                'рекомендации, корректируют\n' +
                'маршрутные листы детей.'
        },
        {
            id: 2,
            logo: desktop,
            title: 'ЛИЧНЫЙ КАБИНЕТ',
            description: 'Каждый Наставник имеет доступ к личному кабинету, где может составлять удобный график ' +
                'встреч с ребенком, получать быстрые советы от психолога, быть в курсе всехсобытий в рамках проекта.'
        },
        {
            id: 3,
            logo: book,
            title: 'Библиотека',
            description: 'На сайте хранится вся необходимая информация об индивидуальных особенностях ' +
                'детей, ссылки на полезные статьи и различная интересная информация о Наставничестве. ' +
                'Доступ в библиотеку открыт для зарегистрированных пользователей.'
        },
        {
            id: 4,
            logo: social,
            title: 'Сообщество',
            description: 'В рамках проекта Наставничество проходят тематические встречи ' +
                'Наставников, детей и кураторов проекта. Участвуя в проекте, вы попадаете в сообщество ' +
                'неравнодушных людей, тех, кому #невсеравно. Всегда можно обратиться за советом к тем, кто давно ' +
                'общается с детьми и получить необходимую информацию.'
        },
    ].map(el => {
        return (
            <div key={el.id} className="mentoring-item">
                <div className="mentoring-item_img-container">
                    <img src={el.logo} className="mentoring-item" alt=""/>
                </div>
                <h3 className="mentoring_item-title">{el.title}</h3>
                <p className="mentoring-item__desc">{el.description}</p>
            </div>
        );
    });

    return (
        <div className="mentoring-container">
            {about}
            <NavLink className="mentoring-container_join-link" to="/join">Хочу участвовать</NavLink>
        </div>
    );
}

export default Mentoring;

import React from 'react'
import { Link } from 'react-router-dom'
import Style from './ServicesConsult.module.css'
import card1 from '../../assets/images/paxtakor.png'
import card2 from '../../assets/images/e02fde07d49ee258cc3f6d1b19207757_S.jpg'
import card3 from '../../assets/images/f5207093f4bafcb21c0c017e46b49f6e_S.jpg'

const ServicesConsult = () => {
    return (
        <div className={Style.main}>
            <div className={Style.inMain} >
                <div className={Style.topLink} >
                    <Link to='/' >QueensGrass </Link> 
                    <p>/</p> 
                    <Link to='/services'>   Услуги</Link>
                    <p>/</p> 
                    <p>
                        Обслуживание и консультации
                    </p>
                </div>
                <div className={Style.content}>
                    <h2>
                        ОБСЛУЖИВАНИЕ ГАЗОНА И КОНСУЛЬТАЦИИ
                    </h2>
                    <p>
                        Технология производства газона начинается с составления смесей семян лучших сортов газонных трав, соответствующих российским климатическим условиям. Затем - выбор полей: изучается грунт, температурный режим, количество осадков, освещенность. Полученные данные позволяют разработать оптимальную агротехническую программу по выращиванию газона, которые мы применяем уже на протяжении 50 лет.
                    </p>
                    <p>
                        Создание газона с помощью готовой дернины – рулонов, в настоящее время, самый технологичный способ благоустройства. Данный способ – наиболее эффективный и даже, если хотите, эффектный.
                    </p>
                    <p>
                        Рулонный газон выращивают на специальных полях, с которых рулоны перевозят в любое место, где запланировано создание спортивного газона.
                    </p>
                    <span>Уход за рулонным газоном после укладки</span>
                    <p>
                        Срок жизни  футбольного газона зависит от того, насколько качественно производится его обслуживание. Здоровый, сильный газон всегда порадует Вас своими внешними качествами.
                    </p>
                    <p>
                    Поэтому не забывайте, пожалуйста, о том, что газону необходимы три вещи:
                    </p>
                    <ul>
                        <li>
                        регулярные правильные стрижки;
                        </li>
                        <li>
                        достаточный полив;
                        </li>
                        <li>
                        своевременные грамотные подкормки.
                        </li>
                    </ul>
                    <p>
                    Правильное выполнение этих работ по уходу за газоном гарантирует вам, что он будет сильным и здоровым, а сорняки слабые и редкие.
                    </p>




                    <div className={Style.pictures} >
                        <div className={Style.imgCard} style={{backgroundImage:`url(${card1})`}} ></div>
                        <div className={Style.imgCard} style={{backgroundImage:`url(${card2})`}} ></div>
                        <div className={Style.imgCard} style={{backgroundImage:`url(${card3})`}} ></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ServicesConsult

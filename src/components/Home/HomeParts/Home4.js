import React from 'react'
import Style from './Home4.module.css'
import icon from '../../../assets/images/icon.svg'
import { Link } from 'react-router-dom'

const Home4 = () => {
    return (
        <div className={Style.main}>
            <div className={Style.inMain} >
                <h2>
                    НАШИ УСЛУГИ
                </h2>
                <div className={Style.text} >
                    <div className={Style.left} >
                        <div className={Style.li} >
                            <div 
                                className={Style.icon} 
                                style={{backgroundImage:`url(${icon})`}} ></div>
                            <p>
                            Строительство футбольных полей
                            </p>
                        </div>
                        <div className={Style.li} >
                            <div 
                                className={Style.icon} 
                                style={{backgroundImage:`url(${icon})`}} ></div>
                            <p>
                            Укладка спортивного натурального газона
                            </p>
                        </div>
                        <div className={Style.li} >
                            <div 
                                className={Style.icon} 
                                style={{backgroundImage:`url(${icon})`}} ></div>
                            <p>
                            Реновация газонного покрытия
                            </p>
                        </div>
                        <div className={Style.li} >
                            <div 
                                className={Style.icon} 
                                style={{backgroundImage:`url(${icon})`}} ></div>
                            <p>
                            Уход за лужайками
                            </p>
                        </div>
                    </div>
                    <div className={Style.right} >
                        <div className={Style.li} >
                            <div 
                                className={Style.icon} 
                                style={{backgroundImage:`url(${icon})`}} ></div>
                            <p>
                            Реконструкция футбольных полей
                            </p>
                        </div>
                        <div className={Style.li} >
                            <div 
                                className={Style.icon} 
                                style={{backgroundImage:`url(${icon})`}} ></div>
                            <p>
                            Обслуживание футбольного поля
                            </p>
                        </div>
                        <div className={Style.li} >
                            <div 
                                className={Style.icon} 
                                style={{backgroundImage:`url(${icon})`}} ></div>
                            <p>
                            Обслуживание гольф площадки
                            </p>
                        </div>
                        <div className={Style.li} >
                            <div 
                                className={Style.icon} 
                                style={{backgroundImage:`url(${icon})`}} ></div>
                            <p>
                            Обслуживание треков ипподрома
                            </p>
                        </div>
                    </div>
                </div>
                <div >
                    <div className={Style.button}>
                        <div>
                        </div>
                        <Link to="/products">ПОДРОБНЕЕ...</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home4

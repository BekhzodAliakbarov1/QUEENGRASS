import React from 'react'
import Style from './Footer.module.css'
import logo from '../../assets/images/logo.png'
import {ImPhone} from 'react-icons/im'
import {TiMail} from 'react-icons/ti'
import {FaTwitter, FaLinkedinIn, FaFacebookF, FaHeart} from 'react-icons/fa'
 
const Footer = () => {
    return (
        <div className={Style.main}>
            <div className={Style.inMain} >
                <div className={Style.flex} >
                    <div className={Style.blok} >
                        <div className={Style.logo} style={{backgroundImage:`url(${logo})`}} ></div>
                        <div className={Style.links} >
                            <h4>
                                Услуги
                            </h4>
                            <a href="/">
                                Строительство футбольных полей
                            </a>
                            <a href="/">
                                Укладка рулонного газона
                            </a>
                            <a href="/">
                                Обслуживание и консультации
                            </a>
                            <a href="/">
                                Реконструкция футбольных полей
                            </a>
                            <div className={Style.icons} >
                                <div className={Style.icon} >
                                    <a href="/">
                                        <FaFacebookF/>
                                    </a>
                                </div>
                                <div className={Style.icon} >
                                   <a href="/">
                                        <FaTwitter/>
                                   </a>
                                </div>
                                <div className={Style.icon} >
                                    <a href="/">
                                        <FaLinkedinIn/>
                                    </a>
                                </div>

                            </div>  
                        </div>
                    </div>
                    <div className={Style.blok} >
                        <div className={Style.links} >
                            <h4>
                                Продукция
                            </h4>
                            <a href="/">
                                Газоны Queens Grass
                            </a>
                            <a href="/">
                                Dennis UK
                            </a>
                            <a href="/">
                                Sisis
                            </a>
                            <a href="/">
                                Trilo
                            </a>
                            <a href="/">
                                Vredo
                            </a>
                            <a href="/">
                                Redexim
                            </a>
                            <a href="/">
                                Harrod UK
                            </a>
                        </div>
                    </div>
                    <div className={Style.blok} >
                        <div className={Style.links} >
                            <h4>
                                О компании
                            </h4>
                            <a href="/">
                                Наши новости
                            </a>
                            <a href="/">
                                История компании
                            </a>
                            <a href="/">
                                Контакты
                            </a>
                            <a href="/">
                                Контакты
                            </a>
                            <a href="/">
                                Оставить заявку
                            </a>
                            <a href="/">
                                Политика обработки персональных данных
                            </a>
                            <div className={Style.inLink} >
                                <ImPhone/>
                                <a href="/">
                                    Оф.тел.: +7 (812) 441-29-41
                                </a>
                            </div>
                            <div className={Style.inLink} >
                                <ImPhone/>
                                <a href="/">
                                    Моб.тел: +7(921)926-32-40
                                </a>
                            </div>
                            <div className={Style.inLink} >
                                <TiMail/>
                                <a href="/">
                                    sales@queensgrass.ru
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={Style.end} >
                    <p>
                        Copyright © 2021 <span>QUEENS GRASS</span> INTERNATIONAL 2001 - 2021 <FaHeart/> <span>HB</span>BH
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Footer

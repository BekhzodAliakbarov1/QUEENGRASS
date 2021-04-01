import React from 'react'
import Style from './Footer.module.css'
import {ImPhone} from 'react-icons/im'
import {TiMail} from 'react-icons/ti'
import {FaTwitter, FaLinkedinIn, FaFacebookF, FaHeart} from 'react-icons/fa'
import { NavLink } from 'react-router-dom'
import { ProductList as products } from '../../API/ProducName'
import { ServiceList as services} from '../../API/ServiceList'
 
const Footer = () => {
    return (
        <div className={Style.main}>
            <div className={Style.inMain} >
                <div className={Style.flex} >
                    <div className={Style.blok} >
                        <div className={Style.links} >
                            <h4>
                                Услуги
                            </h4>
                            {
                                services.map((service, id) => (
                                    <NavLink 
                                        key={id}
                                        activeStyle={{color:'#00880f'}} 
                                        to={`/services/${service.url}`}>
                                        {service.visibleName}
                                    </NavLink>
                                ))
                            }
                            <div className={Style.icons} >
                                <div className={Style.icon} >
                                    <a rel="noreferrer" target="_blank" href="https://www.facebook.com/QueensGrassInternational">
                                        <FaFacebookF/>
                                    </a>
                                </div>
                                <div className={Style.icon} >
                                   <a rel="noreferrer" target="_blank" href="https://twitter.com/queensgrass">
                                        <FaTwitter/>
                                   </a>
                                </div>
                                <div className={Style.icon} >
                                    <a rel="noreferrer" target="_blank" href="https://www.linkedin.com/signup/cold-join?session_redirect=https%3A%2F%2Fwww%2Elinkedin%2Ecom%2Fcompany-beta%2F3298436%2F&trk=login_reg_redirect">
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
                                                    {
                                                        products.map((product,id) => (
                                                            <NavLink 
                                                                key={id}
                                                                activeStyle={{color:'#00880f'}} 
                                                                to={`/product/${product.url}`}>
                                                                {product.visibleName}
                                                            </NavLink>
                                                        ))
                                                    }
                            
                        </div>
                    </div>
                    <div className={Style.blok} >
                        <div className={Style.links} >
                            <h4>
                                О компании
                            </h4>
                            <NavLink
                                activeStyle={{color:'#00880f'}} 
                                to="/about">
                                 История компании
                            </NavLink>
                            
                            <NavLink to="/Contact">
                                Контакты
                            </NavLink>
                            <NavLink to="/request">
                                Оставить заявку
                            </NavLink>
                            <NavLink to="/politika">
                                Политика обработки персональных данных
                            </NavLink>
                            <div className={Style.inLink} >
                                <ImPhone/>
                                <a href="tel://+78124412941">
                                    Оф.тел.: +7 (812) 441-29-41
                                </a>
                            </div>
                            <div className={Style.inLink} >
                                <ImPhone/>
                                <a href="tel://+79219263240">
                                    Моб.тел: +7(921)926-32-40
                                </a>
                            </div>
                            <div className={Style.inLink} >
                                <TiMail/>
                                <a href="mailto:sales@queensgrass.ru">
                                    sales@queensgrass.ru
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={Style.end} >
                    <p>
                        Copyright © 2021 <span>QUEENS GRASS</span> INTERNATIONAL 2001 - 2021 <FaHeart/> <a rel="noreferrer" target='_blank' href="https://hbbhportfolio.vercel.app">H<span>BB</span>H </a>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Footer

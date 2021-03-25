import React from 'react'
import Style from './Contact.module.css'
import {HiLocationMarker} from 'react-icons/hi'
import {ImPhone} from 'react-icons/im'
import {TiMail} from 'react-icons/ti'

const Contact = () => {
    return (
        <div className={Style.main}>
            <div className={Style.inMain} >
                <div className={Style.map} >

                </div>
                <div className={Style.contacts} >
                    <h2>
                        КОНТАКТЫ
                    </h2>
                    <div className={Style.flex}>
                        <div className={Style.russion} >
                            <h3>
                            КОМПАНИЯ <span>"QUEENS GRASS INTERNATIONAL"</span> В РОССИИ
                            </h3>
                            <div className={Style.info} >
                                <div className={Style.icon}>
                                    <HiLocationMarker/>
                                </div>
                                <p>
                                    190031, Россия, Санкт-Петербург, ул. Ефимова, 4а, лит. A, офис 548А
                                </p>
                            </div>
                            <div className={Style.info} >
                                <div className={Style.icon}>
                                    <ImPhone/>
                                </div>
                                <a href='/'>
                                    Оф.тел.: +7 (812) 441-29-41
                                </a>
                            </div>
                            <div className={Style.info} >
                                <div className={Style.icon}>
                                <ImPhone/>
                                </div>
                                <a href='/'>
                                    Моб.тел: +7(921)926-32-40
                                </a>
                            </div>
                            <div className={Style.info} >
                                <div className={Style.icon}>
                                <ImPhone/>
                                </div>
                                <a href='/'>
                                    Факс: +7 (812) 441-29-41
                                </a>
                            </div>
                            <div className={Style.info} >
                                <div className={Style.icon}>
                                <TiMail/>
                                </div>
                                <a href='/'>
                                    sales@queensgrass.ru
                                </a>
                            </div>
                        </div>
                        <div className={Style.netherlands} >
                                <h3>
                                    КОМПАНИЯ <span>"QUEENS GRASS INTERNATIONAL"</span> В НИДЕРЛАНДАХ
                                </h3>
                                <div className={Style.info} >
                                    <div className={Style.icon}>
                                        <HiLocationMarker/>
                                    </div>
                                    <p>
                                        Postbus 42 9530 AA Borger, The Netherlands
                                    </p>
                                </div>
                                <div className={Style.info} >
                                    <div className={Style.icon}>
                                    <ImPhone/>
                                    </div>
                                    <a href='/'>
                                        Телефон: +31 (0) 599 564 447
                                    </a>
                                </div>
                                <div className={Style.info} >
                                    <div className={Style.icon}>
                                    <ImPhone/>
                                    </div>
                                    <a href='/'>
                                        Факс: +31 (0) 599 564 900
                                    </a>
                                </div>
                                <div className={Style.info} >
                                    <div className={Style.icon}>
                                    <TiMail/>
                                    </div>
                                    <a href='/'>
                                        info@queensgrass.com
                                    </a>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact

import React from 'react'
import Style from './Home5.module.css'
import bg from '../../../assets/images/bg2.png'


const Home5 = () => {
    return (
        <div className={Style.main} style={{backgroundImage:`url(${bg})`}} >
            <div className={Style.inMain} >
                <h2>
                    МЫ ЗНАЕМ ЧТО НУЖНО ФУТБОЛЬНОМУ ПОЛЮ
                </h2>
                <p>
                    Идеальный газон проверен временем. Профоборудование №1 в мире. Официальный представитель DENNIS, SISIS
                </p>
                
                <div className={Style.btns} >
                    <a href="/">
                        <div className={Style.button}>
                            <div>
                            </div>
                                <a href="/">Подробнее</a>
                        </div>
                    </a>
                    <a href="/">
                        <div className={Style.button}>
                            <div>
                            </div>
                                <a href="/">Подробнее</a>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Home5

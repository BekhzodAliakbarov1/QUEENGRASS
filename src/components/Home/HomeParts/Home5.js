import React from 'react'
import Style from './Home5.module.css'
import bg from '../../../assets/images/bg2.png'
import { Link } from 'react-router-dom'


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
                    <div >
                        <div className={Style.button}>
                            <div>
                            </div>
                                <Link to="/products">Подробнее</Link>
                        </div>
                    </div>
                    <div>
                        <div className={Style.button}>
                            <div>
                            </div>
                                <Link to="/products">Подробнее</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home5

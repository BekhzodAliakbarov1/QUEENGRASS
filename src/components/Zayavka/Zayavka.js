import React from 'react'
import { Link } from 'react-router-dom'
import Style from './Zayavka.module.css'

const Zayavka = () => {
    return (
        <div className={Style.main}>
            <div className={Style.inMain} >
                <h2>
                    ОСТАВИТЬ ЗАЯВКУ
                </h2>
                <div className={Style.flex} >
                    <div className={Style.left} >
                        <p>
                            Ваше имя:	
                        </p>
                        <p>
                            Ваш телефон:
                        </p>
                    </div>
                    <div className={Style.right} >
                        <input type="text" />
                        <input type="number" />
                        <p>
                            Нажимая кнопку "Отправить", вы принимаете
                            <Link to="/politika"> условия обработки персональных данных</Link>
                        </p>
                        <button type='submit'><div></div> Отправить</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Zayavka

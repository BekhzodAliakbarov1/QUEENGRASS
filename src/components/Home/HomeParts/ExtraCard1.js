import React from 'react'
import Style from './ExtraCard1.module.css'
import grass from '../../../assets/images/grass.png'
import { Link } from 'react-router-dom'

const ExtraCard1 = () => {
    return (
        <div className={Style.main}>
            <div className={Style.img} style={{backgroundImage:`url(${grass})`}} ></div>
            <h2>
                ПРОФЕССИОНАЛЬНЫЕ ГАЗОНОКОСИЛКИ
            </h2>
            <p>
                Газонокосилки для футбольных полей, полей для гольфа и регби
            </p>
            <div>
                <div className={Style.button}>
                    <div>
                    </div>
                    <Link to='/products'>Подробнее...</Link>
                </div>
            </div>
        </div>
    )
}

export default ExtraCard1

import React from 'react'
import style from './ExtraCard.module.css'

import { Link } from 'react-router-dom'

const ExtraCard = ({img, title, link}) => {
    return (
        <div className={style.main}>
            <div className={style.img} style={{backgroundImage:`url(${img})`}} ></div>
            <h3>
                {title}
            </h3>
            <div className={style.button}>
                    <div>
                    </div>
                    <Link to={`/products/${link}`}>Подробнее...</Link>
                </div>
        </div>
    )
}

export default ExtraCard

import React from 'react'
import { Link } from 'react-router-dom'
import Style from './ServicesStaking.module.css'
import card1 from '../../assets/images/paxtakor.png'


const ServicesStaking = () => {
    return (
        <div className={Style.main}>
            <div className={Style.inMain} >
                <div className={Style.topLink} >
                    <Link to='/' >QueensGrass </Link> 
                    <p>/</p> 
                    <Link to='/services'>   Услуги</Link>
                    <p>/</p> 
                    <p>
                        Укладка рулонного газона
                    </p>
                </div>
                <div className={Style.content} >
                    <h2>
                        УКЛАДКА РУЛОННОГО ГАЗОНА
                    </h2>
                    <div className={Style.pictures} >
                        <div className={Style.imgCard} style={{backgroundImage:`url(${card1})`}} ></div>
                        <div className={Style.imgCard} style={{backgroundImage:`url(${card1})`}} ></div>
                        <div className={Style.imgCard} style={{backgroundImage:`url(${card1})`}} ></div>
                        <div className={Style.imgCard} style={{backgroundImage:`url(${card1})`}} ></div>
                        <div className={Style.imgCard} style={{backgroundImage:`url(${card1})`}} ></div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default ServicesStaking

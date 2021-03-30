import React from 'react'
import { Link } from 'react-router-dom'
import Style from './ServicesStaking.module.css'
import card1 from '../../assets/images/paxtakor.png'
import card2 from '../../assets/images/53bed31cb74891ae64a31e4c592ef86d_S.jpg'
import card3 from '../../assets/images/a63cd9e38964634741a5a3fe89055308_S.jpg'
import card4 from '../../assets/images/e02fde07d49ee258cc3f6d1b19207757_S.jpg'
import card5 from '../../assets/images/f5207093f4bafcb21c0c017e46b49f6e_S.jpg'


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
                        <div className={Style.imgCard} style={{backgroundImage:`url(${card2})`}} ></div>
                        <div className={Style.imgCard} style={{backgroundImage:`url(${card3})`}} ></div>
                        <div className={Style.imgCard} style={{backgroundImage:`url(${card4})`}} ></div>
                        <div className={Style.imgCard} style={{backgroundImage:`url(${card5})`}} ></div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default ServicesStaking

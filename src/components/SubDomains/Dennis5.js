import React from 'react'
import { NavLink } from 'react-router-dom'
import Posts from '../Product/ProductGrassParts/Posts';
import style from  './Dennis.module.css'


function Dennis2({product,text}) {
    console.log(product);
    return (
        <div className={style.main}>
            <p className={style.menu}>
                <NavLink to='/'>QueensGrass</NavLink>/
                <NavLink to='/product/Dennis'>Dennis UK</NavLink>/
                <span>
                Ручные инструменты				
                </span>
            </p>
            <h1 className={style.header}>Ручные инструменты</h1>
            <div className={style.wrapper}>
            <Posts products={product} />
            </div>
            
            <div className={style.container}>
                <p>{text[0].pOne}</p>
                <h3>{text[0].tTwo}</h3>
                <p>{text[0].pTwo}</p>
                <h3>{text[0].tThree}</h3>
                <p>{text[0].pThree}</p>
            </div>
        </div>
    )
}

export default Dennis2

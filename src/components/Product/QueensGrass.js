import React from 'react'
import ExtraCard from './ExtraCard'
import style from './QueensGrass.module.css'
import grass1 from '../../assets/images/grass11.jpeg'
import grass2 from '../../assets/images/grass2.jpeg'
import { Link } from 'react-router-dom'

const QueensGrass = () => {
    return (
        <div className={style.main}>
            <div className={style.location}>
                <div className={style.links}><Link to='/products'>Products</Link>/<span>Газоны Queens Grass</span></div>
            </div>
            <div className={style.grid}>
                <ExtraCard img={grass2} title='ЛАНДШАФТНЫЙ ГАЗОН SMALL ROLLS' link='landshaft'/>
                <ExtraCard img={grass1} title='СПОРТИВНЫЙ ГАЗОН BIG ROLLS' link='landshaft'/>
            </div>
        </div>
    )
}

export default QueensGrass

import React from 'react'
import ExtraCard1 from './ExtraCard1'
import Style from './Home6.module.css'

const Home6 = () => {
    return (
        <div className={Style.main} >
            <div className={Style.inMain} >
                <div className={Style.header} >
                    <h2>
                        НАША ПРОДУКЦИЯ
                    </h2>
                    <p>
                        Queens Grass International является официальным поставщиком профессионального оборудования по уходу за натуральным и искусственным покрытиями, таких компаний-производителей как: Dennis, Sisis, Trilo, Redexim, Harrod UK и компании Vredo.
                    </p>
                </div>
                <div  className={Style.allCards} >
                    
                    <ExtraCard1/>
                    <ExtraCard1/>
                    <ExtraCard1/>
                    <ExtraCard1/>
                    <ExtraCard1/>
                    <ExtraCard1/>


                </div>
            </div>
        </div>
    )
}

export default Home6

import React from 'react'
import ExtraCard1 from './ExtraCard1'
import Style from './Home6.module.css'
import img1 from '../../../assets/images/cards/1.jpg'
import img2 from '../../../assets/images/cards/2.jpg'
import img3 from '../../../assets/images/cards/3.jpg'
import img4 from '../../../assets/images/cards/4.jpg'
import img5 from '../../../assets/images/cards/5.jpg'
import img6 from '../../../assets/images/cards/6.jpg'

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
                    
                    <ExtraCard1 img={img1}/>
                    <ExtraCard1 img={img2}/>
                    <ExtraCard1 img={img3}/>
                    <ExtraCard1 img={img4}/>
                    <ExtraCard1 img={img5}/>
                    <ExtraCard1 img={img6}/>


                </div>
            </div>
        </div>
    )
}

export default Home6

import React, { useEffect, useState } from 'react'
// import Zoom from 'react-reveal/Zoom';

import Style from './Home1.module.css'
import img1 from '../../../assets/images/bg.png'
import img2 from '../../../assets/images/slider-1.png'
import img3 from '../../../assets/images/paxtakor.png'


const Home1 = ({title}) => {
    const [img, setImg] = useState(img1)
    const [text, setText] = useState('выращиваем газоны неизменного качества с высокий утойчивастью к изнашиванию и  сильной сопротивляемостью к болезням ')

    useEffect(() => {
        const interval = setInterval(()=>{
            switch (img) {
                case img1:
                    setImg( img2)
                    setText('  выращиваем газоны неизменного качества с высокий утойчивастью к изнашиванию и  сильной сопротивляемостью к болезням ')
                    break;
                case img2:
                    setImg( img3)
                    setText(' выращиваем газоны неизменного качества с высокий утойчивастью к изнашиванию и  сильной сопротивляемостью к болезням ')
                    break;
                case img3:
                    setImg( img1)
                    setText('  выращиваем газоны неизменного качества с высокий утойчивастью к изнашиванию и  сильной сопротивляемостью к болезням ')
                    break;
            
                default:
                    setImg( null)
                    break;
            }
        }, 3000)
        return() => {
            clearInterval(interval)
        }
    })
    return (
        <div className={Style.main} style={{backgroundImage:`url(${img})`}}  >
            <div className={Style.container}>
                <div className={Style.inMain} >
                    <div className={Style.text} >
                        {/* <Zoom left cascade> */}
                            <h2>
                                {title}
                            </h2>
                        {/* </Zoom> */}
                        <p>
                        {text}
                        </p>
                        <a href="/">
                            <div className={Style.button}>
                                <div></div>
                                    <a href="/">Подробнее</a>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home1

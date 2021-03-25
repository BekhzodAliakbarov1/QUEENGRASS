import React, { Fragment, useState } from 'react'
import Style from './Home3.module.css'
import mYu from '../../../assets/images/manYunayted.png'
import arka from '../../../assets/images/arka.png'
import golf from '../../../assets/images/golf.png'
import kalamata from '../../../assets/images/kalamata.png'
import karalevskiy from '../../../assets/images/karalevskiy.png'
import lujniki from '../../../assets/images/lujniki.png'
import paxtakor from '../../../assets/images/paxtakor.png'
import pirgos from '../../../assets/images/pirgos.png'
import sampdoriya from '../../../assets/images/sampdoriya.png'
import sanSiro from '../../../assets/images/san-siro.png'
import zaglebe from '../../../assets/images/zaglebe.png'
import zenit from '../../../assets/images/zenit.png'


const Home3 = () => {
    const [all, setAll] = useState(true)
    const [britain, setBritain] = useState(false)
    const [gretsiya, setGretsiya] = useState(false)
    const [daniya, setDaniya] = useState(false)
    const [italiya, setItaliya] = useState(false)
    const [polsha, setPolsha] = useState(false)
    const [rossiya, setRossiya] = useState(false)
    const [uzbekistan, setUzbekistan] = useState(false)

    const one = () => {
        setAll(true)
        setBritain(false)
        setGretsiya(false)
        setDaniya(false)
        setItaliya(false)
        setPolsha(false)
        setRossiya(false)
        setUzbekistan(false)
    }
    const two = () => {
        setAll(false)
        setBritain(true)
        setGretsiya(false)
        setDaniya(false)
        setItaliya(false)
        setPolsha(false)
        setRossiya(false)
        setUzbekistan(false)
    }
    const three = () => {
        setAll(false)
        setBritain(false)
        setGretsiya(true)
        setDaniya(false)
        setItaliya(false)
        setPolsha(false)
        setRossiya(false)
        setUzbekistan(false)
    }
    const four = () => {
        setAll(false)
        setBritain(false)
        setGretsiya(false)
        setDaniya(true)
        setItaliya(false)
        setPolsha(false)
        setRossiya(false)
        setUzbekistan(false)
    }
    const five = () => {
        setAll(false)
        setBritain(false)
        setGretsiya(false)
        setDaniya(false)
        setItaliya(true)
        setPolsha(false)
        setRossiya(false)
        setUzbekistan(false)
    }
    const six = () => {
        setAll(false)
        setBritain(false)
        setGretsiya(false)
        setDaniya(false)
        setItaliya(false)
        setPolsha(true)
        setRossiya(false)
        setUzbekistan(false)
    }
    const seven = () => {
        setAll(false)
        setBritain(false)
        setGretsiya(false)
        setDaniya(false)
        setItaliya(false)
        setPolsha(false)
        setRossiya(true)
        setUzbekistan(false)
    }
    const eight = () => {
        setAll(false)
        setBritain(false)
        setGretsiya(false)
        setDaniya(false)
        setItaliya(false)
        setPolsha(false)
        setRossiya(false)
        setUzbekistan(true)
    }

    return (
        <div className={Style.main}>
            <div className={Style.inMain} >
                <div className={Style.text} >
                    <h2> 
                        НАШИ <span>ПРОЕКТЫ</span>
                    </h2>
                    <div className={Style.categories} >
                        <div 
                            className={Style.categ} 
                            onClick={one} >
                            <p style={all ? {borderBottom:'1px solid #02762F' , color: '#111'} : {} }>
                                ВСЕ РАБОТЫ
                            </p>
                        </div>
                        <div 
                            className={Style.categ} 
                            
                            onClick={two} >
                            <p style={britain ? {borderBottom:'1px solid #02762F' , color: '#111'} : {} }>
                                ВЕЛИКОБРИТАНИЯ
                            </p>
                        </div>
                        <div 
                            className={Style.categ} 
                            
                            onClick={three} >
                            <p style={gretsiya ? {borderBottom:'1px solid #02762F' , color: '#111'} : {}}>
                                ГРЕЦИЯ
                            </p>
                        </div>
                        <div 
                            className={Style.categ} 
                            
                            onClick={four} >
                            <p style={daniya ? {borderBottom:'1px solid #02762F' , color: '#111'} : {}}>
                                ДАНИЯ
                            </p>
                        </div>
                        <div 
                            className={Style.categ} 
                            
                            onClick={five} >
                            <p style={italiya ? {borderBottom:'1px solid #02762F' , color: '#111'} : {}}>
                                ИТАЛИЯ
                            </p>
                        </div>
                        <div 
                            className={Style.categ} 
                            
                            onClick={six} >
                            <p style={polsha ? {borderBottom:'1px solid #02762F' , color: '#111'} : {}}>
                                ПОЛЬША
                            </p>
                        </div>
                        <div 
                            className={Style.categ} 
                            
                            onClick={seven} >
                            <p style={rossiya ? {borderBottom:'1px solid #02762F' , color: '#111'} : {}}>
                                РОССИЯ
                            </p>
                        </div>
                        <div 
                            className={Style.categ} 
                            
                            onClick={eight} >
                            <p style={uzbekistan ? {borderBottom:'1px solid #02762F' , color: '#111'} : {}}>
                                УЗБЕКИСТАН
                            </p>
                        </div>
                        
                    </div>
                
                </div>
                <div className={Style.grid} >

                    {
                        all &&
                        <Fragment>
                        <div 
                        className={Style.card} 
                        style={{backgroundImage:`url(${zenit})`}} >
                        <p>
                            ЗЕНИТ АРЕНА, САНКТ-ПЕТЕРБУРГ
                        </p>
                    </div>
                    <div 
                        className={Style.card} 
                        style={{backgroundImage:`url(${mYu})`}} >
                        <p>
                            МАНЧЕСТЕР ЮНАЙТЕД
                        </p>
                    </div>
                    <div 
                        className={Style.card} 
                        style={{backgroundImage:`url(${arka})`}} >
                        <p>
                            “АРКА ГДЫНЯ”
                        </p>
                    </div>
                    <div 
                        className={Style.card} 
                        style={{backgroundImage:`url(${zaglebe})`}} >
                        <p>
                            “ЗАГЛЕБЕ ЛЮБИН”
                        </p>
                    </div>
                    <div 
                        className={Style.card} 
                        style={{backgroundImage:`url(${kalamata})`}} >
                        <p>
                            СТАДИОН “КАЛАМАТА”
                        </p>
                    </div>  
                    <div 
                        className={Style.card} 
                        style={{backgroundImage:`url(${pirgos})`}} >
                        <p>
                            СТАДИОН “ПИРГОС”
                        </p>
                    </div>
                    <div 
                        className={Style.card} 
                        style={{backgroundImage:`url(${golf})`}} >
                        <p>
                            ГОЛЬФКЛУБ “ФРЕДЕРИКССУНД”
                        </p>
                    </div>
                    <div 
                        className={Style.card} 
                        style={{backgroundImage:`url(${karalevskiy})`}} >
                        <p>
                            КОРОЛЕВСКИЙ ГОЛЬФЦЕНТР, КОПЕНГАГЕН
                        </p>
                    </div>
                    <div 
                        className={Style.card} 
                        style={{backgroundImage:`url(${sampdoriya})`}} >
                        <p>
                            САМПДОРИЯ УК”
                        </p>
                    </div>
                    <div 
                        className={Style.card} 
                        style={{backgroundImage:`url(${sanSiro})`}} >
                        <p>
                            СТАДИОН “САН-СИРО”, МИЛАН
                        </p>
                    </div>
                    <div 
                        className={Style.card} 
                        style={{backgroundImage:`url(${paxtakor})`}} >
                        <p>
                            СТАДИОН ПАХТАКОР, ТАШКЕНТ
                        </p>
                    </div>
                    <div 
                        className={Style.card} 
                        style={{backgroundImage:`url(${lujniki})`}} >
                        <p>
                            СТАДИОН ЛУЖНИКИ, МОСКВА
                        </p>
                    </div>
                    </Fragment>
                    }
                    {
                        britain && 
                        <Fragment>
                            <div 
                                className={Style.card} 
                                style={{backgroundImage:`url(${mYu})`}} >
                                <p>
                                    МАНЧЕСТЕР ЮНАЙТЕД
                                </p>
                            </div>
                        </Fragment>
                    }
                    {
                        gretsiya &&
                        <Fragment>
                            <div 
                                className={Style.card} 
                                style={{backgroundImage:`url(${kalamata})`}} >
                                <p>
                                    СТАДИОН “КАЛАМАТА”
                                </p>
                            </div>  
                            <div 
                                className={Style.card} 
                                style={{backgroundImage:`url(${pirgos})`}} >
                                <p>
                                    СТАДИОН “ПИРГОС”
                                </p>
                            </div>
                        </Fragment>
                    }
                    {
                        daniya &&
                        <Fragment>
                            <div 
                                className={Style.card} 
                                style={{backgroundImage:`url(${golf})`}} >
                                <p>
                                    ГОЛЬФКЛУБ “ФРЕДЕРИКССУНД”
                                </p>
                            </div>
                            <div 
                                className={Style.card} 
                                style={{backgroundImage:`url(${karalevskiy})`}} >
                                <p>
                                    КОРОЛЕВСКИЙ ГОЛЬФЦЕНТР, КОПЕНГАГЕН
                                </p>
                            </div>
                        </Fragment>

                    }
                    {
                        italiya &&
                        <Fragment>
                            <div 
                                className={Style.card} 
                                style={{backgroundImage:`url(${sampdoriya})`}} >
                                <p>
                                    САМПДОРИЯ УК”
                                </p>
                            </div>
                            <div 
                                className={Style.card} 
                                style={{backgroundImage:`url(${sanSiro})`}} >
                                <p>
                                    СТАДИОН “САН-СИРО”, МИЛАН
                                </p>
                            </div>
                        </Fragment>
                    }
                    {
                        polsha &&
                        <Fragment>
                            <div 
                                className={Style.card} 
                                style={{backgroundImage:`url(${arka})`}} >
                                <p>
                                    “АРКА ГДЫНЯ”
                                </p>
                            </div>
                            <div 
                                className={Style.card} 
                                style={{backgroundImage:`url(${zaglebe})`}} >
                                <p>
                                    “ЗАГЛЕБЕ ЛЮБИН”
                                </p>
                            </div>
                        </Fragment>
                    }
                    {
                        rossiya &&
                        <Fragment>
                            <div 
                                className={Style.card} 
                                style={{backgroundImage:`url(${lujniki})`}} >
                                <p>
                                    СТАДИОН ЛУЖНИКИ, МОСКВА
                                </p>
                            </div>
                            <div 
                                className={Style.card} 
                                style={{backgroundImage:`url(${zenit})`}} >
                                <p>
                                    ЗЕНИТ АРЕНА, САНКТ-ПЕТЕРБУРГ
                                </p>
                            </div>
                        </Fragment>
                    }
                    {
                        uzbekistan &&
                        <Fragment>
                            <div 
                                className={Style.card} 
                                style={{backgroundImage:`url(${paxtakor})`}} >
                                <p>
                                    СТАДИОН ПАХТАКОР, ТАШКЕНТ
                                </p>
                            </div>
                        </Fragment>
                    }
                    

                </div>
            </div>
        </div>
    )
}

export default Home3

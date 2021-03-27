import React, { Fragment, useState } from 'react'
import style from './SideBar.module.css'
import {HiOutlineChevronDown, HiOutlineChevronUp} from 'react-icons/hi'
import {AiFillCaretDown, AiFillCaretUp} from 'react-icons/ai'
import { NavLink } from 'react-router-dom'


const SideBar = () => {
    const [one, setOne] = useState(false)
    const [two, setTwo] = useState(false)
    const [three, setThree] = useState(false)
    const [icon, setIcon] = useState(false)

    const first = () => {
        setOne(!one)
        setTwo(false)
        setThree(false)
    }
    const second = () => {
        setOne(false)
        setTwo(!two)
        setThree(false)
    }
    const third = () => {
        setOne(false)
        setTwo(false)
        setThree(!three)
    }

    return (
        <div className={style.main}>
            <div className={style.sideBarMobile} onClick={()=> setIcon(!icon)} >
                {
                     icon ? 
                     <AiFillCaretDown/>
                    :<AiFillCaretUp/>
                }
                            
            </div>
                        <div className={!icon ? style.unHidden : style.hidden} >
                            <div className={style.inSide} >
                                <div className={style.titleSide} onClick={first} >
                                    <p>
                                        О НАС
                                    </p>
                                    {
                                        !one ? 
                                        <HiOutlineChevronDown/>
                                        : <HiOutlineChevronUp/>
                                    }
                                </div>
                                {
                                    one &&
                                    <Fragment>
                                        <NavLink activeStyle={{color:'#00880f'}} to='/'>
                                        НАШИ НОВОСТИ
                                        </NavLink>
                                        <NavLink activeStyle={{color:'#00880f'}} to='/'>
                                            ИСТОРИЯ QUEENS GRASS INTERNATIONAL
                                        </NavLink>
                                    </Fragment>
                                }
                            </div>
                            <div className={style.inSide} >
                                <div className={style.titleSide} onClick={second} >
                                    <p>
                                        УСЛУГИ

                                    </p>
                                    {
                                        !two ? 
                                        <HiOutlineChevronDown/>
                                        : <HiOutlineChevronUp/>
                                    }
                                </div>
                                {
                                    two &&
                                    <Fragment>
                                        <NavLink activeStyle={{color:'#00880f'}} to='/'>
                                            СТРОИТЕЛЬСТВО ФУТБОЛЬНЫХ ПОЛЕЙ
                                        </NavLink>
                                        <NavLink activeStyle={{color:'#00880f'}} to='/'>
                                            УКЛАДКА РУЛОННОГО ГАЗОНА
                                        </NavLink>
                                        <NavLink activeStyle={{color:'#00880f'}} to='/'>
                                            ОБСЛУЖИВАНИЕ И КОНСУЛЬТАЦИИ
                                        </NavLink>
                                        <NavLink activeStyle={{color:'#00880f'}} to='/'>
                                            РЕКОНСТРУКЦИЯ ФУТБОЛЬНЫХ ПОЛЕЙ
                                        </NavLink>
                                    </Fragment>
                                }
                            </div>
                            <div className={style.inSide} >
                                <div className={style.titleSide} onClick={third} >
                                    <p>
                                        ПРОДУКЦИЯ
                                    </p>
                                    {
                                        !three ? 
                                        <HiOutlineChevronDown/>
                                        : <HiOutlineChevronUp/>
                                    }
                                </div>
                                {
                                    three && 
                                    <Fragment>
                                        <NavLink activeStyle={{color:'#00880f'}} to='/'>
                                            СТРОИТЕЛЬСТВО ФУТБОЛЬНЫХ ПОЛЕЙ
                                        </NavLink>
                                        <NavLink activeStyle={{color:'#00880f'}} to='/'>
                                            DENNIS UK
                                        </NavLink>
                                        <NavLink activeStyle={{color:'#00880f'}} to='/'>
                                            SISIS
                                        </NavLink>
                                        <NavLink activeStyle={{color:'#00880f'}} to='/'>
                                            TRILO
                                        </NavLink>
                                        <NavLink activeStyle={{color:'#00880f'}} to='/'>
                                            VREDO
                                        </NavLink>
                                        <NavLink activeStyle={{color:'#00880f'}} to='/'>
                                            REDEXIM
                                        </NavLink>
                                        <NavLink activeStyle={{color:'#00880f'}} to='/'>
                                            HARROD UK
                                        </NavLink>
                                        <NavLink activeStyle={{color:'#00880f'}} to='/'>
                                            COMPACT TRACTORS
                                        </NavLink>
                                        <NavLink activeStyle={{color:'#00880f'}} to='/'>
                                            HUNTER
                                        </NavLink>
                                    </Fragment>
                                }
                                

                            </div>
                        </div>
                    

            
        </div>
    )
}

export default SideBar

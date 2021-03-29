import React, { Fragment, useEffect, useState } from 'react'
import style from './SideBar.module.css'
import {HiOutlineChevronDown, HiOutlineChevronUp} from 'react-icons/hi'
import {AiFillCaretDown, AiFillCaretUp} from 'react-icons/ai'
import { NavLink } from 'react-router-dom'
import {ProductList as products} from '../../API/ProducName'
import { ServiceList as services} from '../../API/ServiceList'


const SideBar = () => {
    const [two, setTwo] = useState(false)
    const [three, setThree] = useState(true)
    const [icon, setIcon] = useState(false)


    useEffect(() => {
        window.addEventListener('resize', e => {
            e.currentTarget.innerWidth  > 800 ? setIcon(false) : setIcon(true) 
        })
    }, [])


    const second = () => {
        setTwo(!two)
        setThree(false)
    }
    const third = () => {
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
                                        {
                                            products.map((product,index) => (
                                                <NavLink onClick={()=>window.innerWidth  <  800  && setIcon(!icon)} key={index} activeStyle={{color:'#00880f', borderTop: '1px solid #00880f',borderBottom: '1px solid #00880f'}} to={`/product/${product.url}`}>
                                                    {product.visibleName}
                                                </NavLink>
                                            ))
                                        }
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
                                        {
                                            services.map((service, id) => (
                                                <NavLink 
                                                    key={id}
                                                    activeStyle={{color:'#00880f'}} 
                                                    to={`/services/${service.url}`}>
                                                    {service.visibleName}
                                                </NavLink>
                                            ))
                                        }
                                    </Fragment>
                                }
                            </div>    
                        </div>
                    

            
        </div>
    )
}

export default SideBar

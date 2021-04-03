import React, { Fragment, useEffect, useState, useReducer } from 'react'
import style from './SideBar.module.css'
import {HiOutlineChevronDown, HiOutlineChevronUp} from 'react-icons/hi'
import { NavLink } from 'react-router-dom'
import { ServiceList as services} from '../../API/ServiceList'


const initialState = {
    first: false,
    second:false,
    third:false,
    fourth:false,
    fifth:false,
    sixth:false
}
const reducer = (state, action) => {
    switch (action.type) {
        case 'FIRST':
            return {...initialState,first: true }
        case 'SECOND':
            return {...initialState,second:true}
        case 'THIRD':
            return {...initialState, third:true}
        case 'FOURTH':
            return {...initialState, fourth:true}
        case 'FIFTH':
            return {...initialState, fifth:true}
        case 'SIXTH':
            return {...initialState,sixth :true}
        default:
            return state
    }
}



const SideBar = () => {
    const [state, dispatch] = useReducer(reducer, initialState)



    const [two, setTwo] = useState(false)
    const [three, setThree] = useState(true)
    const [icon, setIcon] = useState(true)


    useEffect(() => {
        window.addEventListener('resize', e => {
            e.currentTarget.innerWidth  > 800 ? setIcon(false) : setIcon(true) 
        })
        const interval = setInterval(() => {
            window.innerWidth > 800 && setIcon(false)
        }, 500);
        return() => {
            clearInterval(interval)
        }
    })


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
                        <div className={style.unHidden} >
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
                                        <NavLink onClick={()=>window.innerWidth  <  800  && setIcon(!icon)} activeStyle={{color:'#00880f', borderTop: '1px solid #00880f',borderBottom: '1px solid #00880f'}} to={`/product/grass`}>
                                            Газоны Queens Grass
                                        </NavLink>
                                        <NavLink onClick={()=>{
                                            window.innerWidth  <  800  && setIcon(!icon)
                                            dispatch({type:'FIRST'})
                                        }} activeStyle={{color:'#00880f', borderTop: '1px solid #00880f',borderBottom: '1px solid #00880f'}} to={`/product/Dennis`}>
                                            Dennis UK
                                        </NavLink>
                                        {
                                            state.first && (
                                                <Fragment>
                                                    <NavLink to='/Product/dennis/1' activeStyle={{color:'#00880f', borderTop: '1px solid #00880f',borderBottom: '1px solid #00880f'}} className={style.subdomains}>Газонокосилки для футбольных полей / хоккей / регби площадок</NavLink>
                                                    <NavLink to='/Product/dennis/2' activeStyle={{color:'#00880f', borderTop: '1px solid #00880f',borderBottom: '1px solid #00880f'}} className={style.subdomains}>Газонокосилки для ландшафтных объектов</NavLink>
                                                    <NavLink to='/Product/dennis/3' activeStyle={{color:'#00880f', borderTop: '1px solid #00880f',borderBottom: '1px solid #00880f'}} className={style.subdomains}>Газонокосилки для муниципальных объектов</NavLink>
                                                    <NavLink to='/Product/dennis/4' activeStyle={{color:'#00880f', borderTop: '1px solid #00880f',borderBottom: '1px solid #00880f'}} className={style.subdomains}>Вертикуляция</NavLink>
                                                    <NavLink to='/Product/dennis/5' activeStyle={{color:'#00880f', borderTop: '1px solid #00880f',borderBottom: '1px solid #00880f'}} className={style.subdomains}>Ручные инструменты</NavLink>
                                                    <NavLink to='/Product/dennis/6' activeStyle={{color:'#00880f', borderTop: '1px solid #00880f',borderBottom: '1px solid #00880f'}} className={style.subdomains}>Посев / подсев</NavLink>
                                                    {/* <NavLink to='/Product/dennis/7' activeStyle={{color:'#00880f', borderTop: '1px solid #00880f',borderBottom: '1px solid #00880f'}} className={style.subdomains}>Коробы для сохранности</NavLink> */}
                                                </Fragment>
                                            )
                                        }
                                        <NavLink onClick={()=>{
                                            window.innerWidth  <  800  && setIcon(!icon)
                                            dispatch({type:'SECOND'})
                                        }} activeStyle={{color:'#00880f', borderTop: '1px solid #00880f',borderBottom: '1px solid #00880f'}} to={`/product/Sisis`}>
                                            Sisis
                                        </NavLink>
                                        {
                                            state.second && (
                                                <Fragment>
                                                    <NavLink to='/Product/Sisis/1' activeStyle={{color:'#00880f', borderTop: '1px solid #00880f',borderBottom: '1px solid #00880f'}} className={style.subdomains}>Оборудование для искусственных покрытий</NavLink>
                                                    <NavLink to='/Product/Sisis/2' activeStyle={{color:'#00880f', borderTop: '1px solid #00880f',borderBottom: '1px solid #00880f'}} className={style.subdomains}>Оборудование для ландшафтных / садово-парковых объектов</NavLink>
                                                    <NavLink to='/Product/Sisis/3' activeStyle={{color:'#00880f', borderTop: '1px solid #00880f',borderBottom: '1px solid #00880f'}} className={style.subdomains}>Оборудование для футбольных полей / гольф полей</NavLink>
                                                </Fragment>
                                            )
                                        }
                                        <NavLink onClick={()=>{
                                            window.innerWidth  <  800  && setIcon(!icon)
                                            dispatch({type:'THIRD'})
                                        }} activeStyle={{color:'#00880f', borderTop: '1px solid #00880f',borderBottom: '1px solid #00880f'}} to={`/product/Trilo`}>
                                            Trilo
                                        </NavLink>
                                        {
                                            state.third && (
                                                <Fragment>
                                                    <NavLink to='/Product/Trilo/1' activeStyle={{color:'#00880f', borderTop: '1px solid #00880f',borderBottom: '1px solid #00880f'}} className={style.subdomains}>Пневмомашины для сдувания опавших листьев</NavLink>
                                                    <NavLink to='/Product/Trilo/2' activeStyle={{color:'#00880f', borderTop: '1px solid #00880f',borderBottom: '1px solid #00880f'}} className={style.subdomains}>Вакуумные устройства</NavLink>
                                                    <NavLink to='/Product/Trilo/3' activeStyle={{color:'#00880f', borderTop: '1px solid #00880f',borderBottom: '1px solid #00880f'}} className={style.subdomains}>Вакуумные сборщики</NavLink>
                                                    <NavLink to='/Product/Trilo/4' activeStyle={{color:'#00880f', borderTop: '1px solid #00880f',borderBottom: '1px solid #00880f'}} className={style.subdomains}>Скарификаторы</NavLink>
                                                    <NavLink to='/Product/Trilo/5' activeStyle={{color:'#00880f', borderTop: '1px solid #00880f',borderBottom: '1px solid #00880f'}} className={style.subdomains}>Укладчики газона</NavLink>
                                                    <NavLink to='/Product/Trilo/6' activeStyle={{color:'#00880f', borderTop: '1px solid #00880f',borderBottom: '1px solid #00880f'}} className={style.subdomains}>Упаковщик поддонов</NavLink>
                                                    <NavLink to='/Product/Trilo/7' activeStyle={{color:'#00880f', borderTop: '1px solid #00880f',borderBottom: '1px solid #00880f'}} className={style.subdomains}>Всасывающие контейнеры</NavLink>
                                                </Fragment>
                                            )
                                        }
                                        <NavLink onClick={()=>{
                                            window.innerWidth  <  800  && setIcon(!icon)
                                            dispatch({type:'FOURTH'})
                                        }} activeStyle={{color:'#00880f', borderTop: '1px solid #00880f',borderBottom: '1px solid #00880f'}} to={`/product/Vredo`}>
                                            Vredo
                                        </NavLink>
                                        {
                                            state.fourth && (
                                                <Fragment>
                                                    <NavLink to='/Product/Vredo/1' activeStyle={{color:'#00880f', borderTop: '1px solid #00880f',borderBottom: '1px solid #00880f'}} className={style.subdomains}>Сеялки для спортивных полей и гольфа</NavLink>
                                                    <NavLink to='/Product/Vredo/2' activeStyle={{color:'#00880f', borderTop: '1px solid #00880f',borderBottom: '1px solid #00880f'}} className={style.subdomains}>Сеялки для садово-парковых территорий</NavLink>
                                                    <NavLink to='/Product/Vredo/3' activeStyle={{color:'#00880f', borderTop: '1px solid #00880f',borderBottom: '1px solid #00880f'}} className={style.subdomains}>Сеялки для сельского хозяйства</NavLink>
                                                </Fragment>
                                            )
                                        }
                                        <NavLink onClick={()=>{
                                            window.innerWidth  <  800  && setIcon(!icon)
                                            dispatch({type:'FIFTH'})
                                        }} activeStyle={{color:'#00880f', borderTop: '1px solid #00880f',borderBottom: '1px solid #00880f'}} to={`/product/Redexim`}>
                                            Redexim
                                        </NavLink>
                                        {
                                            state.fifth && (
                                                <Fragment>
                                                    <NavLink to='/Product/Redexim/1' activeStyle={{color:'#00880f', borderTop: '1px solid #00880f',borderBottom: '1px solid #00880f'}} className={style.subdomains}>Aэрация</NavLink>
                                                    <NavLink to='/Product/Redexim/2' activeStyle={{color:'#00880f', borderTop: '1px solid #00880f',borderBottom: '1px solid #00880f'}} className={style.subdomains}>Поверхностное пескование</NavLink>
                                                    <NavLink to='/Product/Redexim/3' activeStyle={{color:'#00880f', borderTop: '1px solid #00880f',borderBottom: '1px solid #00880f'}} className={style.subdomains}>Посев / подсев / сеялки</NavLink>
                                                    <NavLink to='/Product/Redexim/4' activeStyle={{color:'#00880f', borderTop: '1px solid #00880f',borderBottom: '1px solid #00880f'}} className={style.subdomains}>Уборка / Реновация поля</NavLink>
                                                    <NavLink to='/Product/Redexim/5' activeStyle={{color:'#00880f', borderTop: '1px solid #00880f',borderBottom: '1px solid #00880f'}} className={style.subdomains}>Оборудование для искусственных покрытий</NavLink>
                                                    <NavLink to='/Product/Redexim/6' activeStyle={{color:'#00880f', borderTop: '1px solid #00880f',borderBottom: '1px solid #00880f'}} className={style.subdomains}>Самоходный тягач</NavLink>
                                                    <NavLink to='/Product/Redexim/7' activeStyle={{color:'#00880f', borderTop: '1px solid #00880f',borderBottom: '1px solid #00880f'}} className={style.subdomains}>Запасные части</NavLink>
                                                </Fragment>
                                            )
                                        }
                                        <NavLink onClick={()=>{
                                            window.innerWidth  <  800  && setIcon(!icon)
                                            dispatch({type:'SIXTH'})
                                        }} activeStyle={{color:'#00880f', borderTop: '1px solid #00880f',borderBottom: '1px solid #00880f'}} to={`/product/Harrod`}>
                                            Harrod UK
                                        </NavLink>
                                        {
                                            state.sixth && (
                                                <Fragment>
                                                    <NavLink to='/Product/Harrod/1' activeStyle={{color:'#00880f', borderTop: '1px solid #00880f',borderBottom: '1px solid #00880f'}} className={style.subdomains}>Футбольные ворота 7,32 m х 2,44 м</NavLink>
                                                    <NavLink to='/Product/Harrod/2' activeStyle={{color:'#00880f', borderTop: '1px solid #00880f',borderBottom: '1px solid #00880f'}} className={style.subdomains}>Футбольные ворота 5 м х 2 м</NavLink>
                                                    <NavLink to='/Product/Harrod/3' activeStyle={{color:'#00880f', borderTop: '1px solid #00880f',borderBottom: '1px solid #00880f'}} className={style.subdomains}>Мини-футбол</NavLink>
                                                    <NavLink to='/Product/Harrod/4' activeStyle={{color:'#00880f', borderTop: '1px solid #00880f',borderBottom: '1px solid #00880f'}} className={style.subdomains}>Укрытия для команд</NavLink>
                                                    <NavLink to='/Product/Harrod/5' activeStyle={{color:'#00880f', borderTop: '1px solid #00880f',borderBottom: '1px solid #00880f'}} className={style.subdomains}>Укрытия для судейства</NavLink>
                                                    <NavLink to='/Product/Harrod/6' activeStyle={{color:'#00880f', borderTop: '1px solid #00880f',borderBottom: '1px solid #00880f'}} className={style.subdomains}>Ворота регбийные Millennium</NavLink>
                                                </Fragment>
                                            )
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

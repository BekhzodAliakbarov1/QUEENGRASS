import React, {useState, useEffect} from 'react';
import { Link, NavLink } from 'react-router-dom';
import style from './Navbar.module.css';
import {VscChromeClose, VscMenu} from 'react-icons/vsc'
import img from '../../assets/images/logo.png'

const navbarLinks = [
    {path:'/about', name:'О нас'},
    {path:'/services', name:'Услуги'},
    {path:'/products', name:'Продукция'},
    {path:'/portfolio', name:'Портфолио'},
    {path:'/contact', name:'Контакты'},
    {path: '/request', name: 'Заявка'}
]

function Navbar() {
    const [scroll, setScroll] = useState(false)
    const [clicked, setclicked] = useState(false)

    useEffect(() => {
        const timer = setInterval(() => {
            if(window.scrollY > 300){
                setScroll(true)
            }else{
                setScroll(false)
            }
        }, 1000);
        return () => {
            clearInterval(timer)
        }
    })
    const navbarDesktop = () => {
        return(
            <div className={scroll ? `${style.mainScroll}`: `${style.main}`}>
                <div className={style.container}>
                    <div className={style.images}>
                        <Link to='/'>
                            <div className={style.logo} style={{backgroundImage: `url(${img})`}}></div>
                        </Link>
                    </div>
                    <div className={style.links}>
                        {
                            navbarLinks.map((link, index) => {
                                return(
                                    <NavLink activeStyle={{color:'#00880F'}} key={index} to={link.path}>
                                        {link.name}
                                    </NavLink>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        )
    }
    const setClassName = () => {
        if(scroll){
            return `${style.mainPhoneScroll}`
        }else if(clicked){
            return `${style.mainPhoneScroll}`
        }else{
            return `${style.mainPhone}`
        }
    }
    const navbarMobile =() => {
        return(
            <div className={setClassName()}>
                <div className={style.containerPhone}>
                    <div className={style.images}>
                        <div className={style.logo} style={{backgroundImage: `url(${img})`}}></div>
                    </div>
                    {clicked ? <VscChromeClose onClick={() => setclicked(false)}/> : <VscMenu onClick={() => setclicked(true)}/>}
                </div>
                <div className={clicked ? `${style.linksPhone} ${style.clicked}` : `${style.linksPhone} ${style.nonclicked}`}>
                    {
                        navbarLinks.map((link, index) => {
                            return(
                                <NavLink activeStyle={{color:'#00880F'}} onClick={() => setclicked(false)} key={index} to={link.path}>
                                    {link.name}                                   
                                </NavLink>
                            )
                        })
                    }
                </div>
            </div>
        )
    }

    return (
        <div>
            {navbarDesktop()}
            {navbarMobile()}
        </div>
    )
}

export default Navbar
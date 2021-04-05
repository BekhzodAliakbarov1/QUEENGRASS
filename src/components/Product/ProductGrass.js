/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect, Fragment } from 'react';
import {connect} from 'react-redux'
import {fetchAllData} from '../../actions'


import Products from './ProductGrassParts/Posts';
import Pagination from './ProductGrassParts/Pagination';
import style from './ProductGrass.module.css';
import { Link, NavLink } from 'react-router-dom';
import ProductMainInfor from '../ProductTypeMainInfo/ProductMainInfor';

const ProductRender = (props) => {
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [productsPerPage] = useState(12);
    const [productList, setproductList] = useState([])
    useEffect(() => {
        setproductList(props.grass)
        props.fetchAllData()
        props.all !== undefined  ? setproductList(props.grass) : setproductList(props.grass.filter( product=> product.typeOfProduct === `${props.product.name}`))
        setLoading(true);
        setLoading(false);
    },[]);
    // Get current posts
    const indexOfLastPost = currentPage * productsPerPage;
    const indexOfFirstPost = indexOfLastPost - productsPerPage;
    const currentProducts = productList.slice(indexOfFirstPost, indexOfLastPost);
    // Change page
    const paginate = pageNumber => setCurrentPage(pageNumber);
    
    const subNavbarRender = () => {
        switch (props.product.url) {
            case "Dennis":
                return <div className={style.linksNavbar}>
                    <Fragment>
                        <NavLink to='/Product/dennis/1' activeStyle={{color:'#00880f', borderTop: '1px solid #00880f',borderBottom: '1px solid #00880f'}} className={style.subdomains}>Газонокосилки для футбольных полей / хоккей / регби площадок</NavLink>
                        <NavLink to='/Product/dennis/2' activeStyle={{color:'#00880f', borderTop: '1px solid #00880f',borderBottom: '1px solid #00880f'}} className={style.subdomains}>Газонокосилки для ландшафтных объектов</NavLink>
                        <NavLink to='/Product/dennis/3' activeStyle={{color:'#00880f', borderTop: '1px solid #00880f',borderBottom: '1px solid #00880f'}} className={style.subdomains}>Газонокосилки для муниципальных объектов</NavLink>
                        <NavLink to='/Product/dennis/4' activeStyle={{color:'#00880f', borderTop: '1px solid #00880f',borderBottom: '1px solid #00880f'}} className={style.subdomains}>Вертикуляция</NavLink>
                        <NavLink to='/Product/dennis/5' activeStyle={{color:'#00880f', borderTop: '1px solid #00880f',borderBottom: '1px solid #00880f'}} className={style.subdomains}>Ручные инструменты</NavLink>
                        <NavLink to='/Product/dennis/6' activeStyle={{color:'#00880f', borderTop: '1px solid #00880f',borderBottom: '1px solid #00880f'}} className={style.subdomains}>Посев / подсев</NavLink>
                        {/* <NavLink to='/Product/dennis/7' activeStyle={{color:'#00880f', borderTop: '1px solid #00880f',borderBottom: '1px solid #00880f'}} className={style.subdomains}>Коробы для сохранности</NavLink> */}
                    </Fragment>
                </div>
            case "Trilo":
                return <div className={style.linksNavbar}>
                    <Fragment>
                        <NavLink to='/Product/Trilo/1' activeStyle={{color:'#00880f', borderTop: '1px solid #00880f',borderBottom: '1px solid #00880f'}} className={style.subdomains}>Пневмомашины для сдувания опавших листьев</NavLink>
                        <NavLink to='/Product/Trilo/2' activeStyle={{color:'#00880f', borderTop: '1px solid #00880f',borderBottom: '1px solid #00880f'}} className={style.subdomains}>Вакуумные устройства</NavLink>
                        <NavLink to='/Product/Trilo/3' activeStyle={{color:'#00880f', borderTop: '1px solid #00880f',borderBottom: '1px solid #00880f'}} className={style.subdomains}>Вакуумные сборщики</NavLink>
                        <NavLink to='/Product/Trilo/4' activeStyle={{color:'#00880f', borderTop: '1px solid #00880f',borderBottom: '1px solid #00880f'}} className={style.subdomains}>Скарификаторы</NavLink>
                        <NavLink to='/Product/Trilo/5' activeStyle={{color:'#00880f', borderTop: '1px solid #00880f',borderBottom: '1px solid #00880f'}} className={style.subdomains}>Укладчики газона</NavLink>
                        <NavLink to='/Product/Trilo/6' activeStyle={{color:'#00880f', borderTop: '1px solid #00880f',borderBottom: '1px solid #00880f'}} className={style.subdomains}>Упаковщик поддонов</NavLink>
                        <NavLink to='/Product/Trilo/7' activeStyle={{color:'#00880f', borderTop: '1px solid #00880f',borderBottom: '1px solid #00880f'}} className={style.subdomains}>Всасывающие контейнеры</NavLink>
                    </Fragment>
                </div>
            case "Sisis":
                return <div className={style.linksNavbar}>
                    <Fragment>
                        <NavLink to='/Product/Sisis/1' activeStyle={{color:'#00880f', borderTop: '1px solid #00880f',borderBottom: '1px solid #00880f'}} className={style.subdomains}>Оборудование для искусственных покрытий</NavLink>
                        <NavLink to='/Product/Sisis/2' activeStyle={{color:'#00880f', borderTop: '1px solid #00880f',borderBottom: '1px solid #00880f'}} className={style.subdomains}>Оборудование для ландшафтных / садово-парковых объектов</NavLink>
                        <NavLink to='/Product/Sisis/3' activeStyle={{color:'#00880f', borderTop: '1px solid #00880f',borderBottom: '1px solid #00880f'}} className={style.subdomains}>Оборудование для футбольных полей / гольф полей</NavLink>
                    </Fragment>
                </div>
            case "Vredo":
                return <div className={style.linksNavbar}>
                    <Fragment>
                        <NavLink to='/Product/Vredo/1' activeStyle={{color:'#00880f', borderTop: '1px solid #00880f',borderBottom: '1px solid #00880f'}} className={style.subdomains}>Сеялки для спортивных полей и гольфа</NavLink>
                        <NavLink to='/Product/Vredo/2' activeStyle={{color:'#00880f', borderTop: '1px solid #00880f',borderBottom: '1px solid #00880f'}} className={style.subdomains}>Сеялки для садово-парковых территорий</NavLink>
                        <NavLink to='/Product/Vredo/3' activeStyle={{color:'#00880f', borderTop: '1px solid #00880f',borderBottom: '1px solid #00880f'}} className={style.subdomains}>Сеялки для сельского хозяйства</NavLink>
                    </Fragment>
                </div>
            case "Redexim":
                return <div className={style.linksNavbar}>
                    <Fragment>
                        <NavLink to='/Product/Redexim/1' activeStyle={{color:'#00880f', borderTop: '1px solid #00880f',borderBottom: '1px solid #00880f'}} className={style.subdomains}>Aэрация</NavLink>
                        <NavLink to='/Product/Redexim/2' activeStyle={{color:'#00880f', borderTop: '1px solid #00880f',borderBottom: '1px solid #00880f'}} className={style.subdomains}>Поверхностное пескование</NavLink>
                        <NavLink to='/Product/Redexim/3' activeStyle={{color:'#00880f', borderTop: '1px solid #00880f',borderBottom: '1px solid #00880f'}} className={style.subdomains}>Посев / подсев / сеялки</NavLink>
                        <NavLink to='/Product/Redexim/4' activeStyle={{color:'#00880f', borderTop: '1px solid #00880f',borderBottom: '1px solid #00880f'}} className={style.subdomains}>Уборка / Реновация поля</NavLink>
                        <NavLink to='/Product/Redexim/5' activeStyle={{color:'#00880f', borderTop: '1px solid #00880f',borderBottom: '1px solid #00880f'}} className={style.subdomains}>Оборудование для искусственных покрытий</NavLink>
                        <NavLink to='/Product/Redexim/6' activeStyle={{color:'#00880f', borderTop: '1px solid #00880f',borderBottom: '1px solid #00880f'}} className={style.subdomains}>Самоходный тягач</NavLink>
                        <NavLink to='/Product/Redexim/7' activeStyle={{color:'#00880f', borderTop: '1px solid #00880f',borderBottom: '1px solid #00880f'}} className={style.subdomains}>Запасные части</NavLink>
                    </Fragment>
                </div>
            case "Harrod":
                return <div className={style.linksNavbar}>
                    <Fragment>
                        <NavLink to='/Product/Harrod/1' activeStyle={{color:'#00880f', borderTop: '1px solid #00880f',borderBottom: '1px solid #00880f'}} className={style.subdomains}>Футбольные ворота 7,32 m х 2,44 м</NavLink>
                        <NavLink to='/Product/Harrod/2' activeStyle={{color:'#00880f', borderTop: '1px solid #00880f',borderBottom: '1px solid #00880f'}} className={style.subdomains}>Футбольные ворота 5 м х 2 м</NavLink>
                        <NavLink to='/Product/Harrod/3' activeStyle={{color:'#00880f', borderTop: '1px solid #00880f',borderBottom: '1px solid #00880f'}} className={style.subdomains}>Мини-футбол</NavLink>
                        <NavLink to='/Product/Harrod/4' activeStyle={{color:'#00880f', borderTop: '1px solid #00880f',borderBottom: '1px solid #00880f'}} className={style.subdomains}>Укрытия для команд</NavLink>
                        <NavLink to='/Product/Harrod/5' activeStyle={{color:'#00880f', borderTop: '1px solid #00880f',borderBottom: '1px solid #00880f'}} className={style.subdomains}>Укрытия для судейства</NavLink>
                        <NavLink to='/Product/Harrod/6' activeStyle={{color:'#00880f', borderTop: '1px solid #00880f',borderBottom: '1px solid #00880f'}} className={style.subdomains}>Ворота регбийные Millennium</NavLink>
                    </Fragment>
                </div>
            default:
                break
        }
    }



    return (
        <div className={style.main}>
            <div>
                {subNavbarRender()}
            </div>
            <div className={style.location}>
                <div className={style.links}><Link to='/products'>Продукты</Link>/<span>{props.product?.visibleName}</span></div>
            </div>
            <h1 className={style.header}>{props.product ? props.product.visibleName : 'Продукты' }</h1>
            <div className={style.allProducts}>
                <Products products={currentProducts} loading={loading} />
            </div>
            <Pagination
                productsPerPage={productsPerPage}
                totalProducts={productList.length}
                paginate={paginate}
                name={props.product?.url}
            />
            <ProductMainInfor  name={productList[0]?.typeOfProduct} />
        </div>
    );
};
const mapStateToProps = state => {
    return{
        grass: state.allProducts
    }
}

export default connect(mapStateToProps, {fetchAllData})(ProductRender)

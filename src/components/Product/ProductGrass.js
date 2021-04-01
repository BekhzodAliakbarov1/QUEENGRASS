/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import {connect} from 'react-redux'
import {fetchAllData} from '../../actions'


import Products from './ProductGrassParts/Posts';
import Pagination from './ProductGrassParts/Pagination';
import style from './ProductGrass.module.css';
import { Link } from 'react-router-dom';
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
    return (
        <div className={style.main}>
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

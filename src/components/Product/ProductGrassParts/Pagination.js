import React from 'react';
import style from './Pagination.module.css'
import {  NavLink } from 'react-router-dom';

const Pagination = ({ productsPerPage, totalProducts, paginate,name }) => {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalProducts / productsPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <div className={style.main}>
            <div className={style.pagination}>
                {pageNumbers.map(number => (
                <div key={number} className={style.pageItem} >
                    <NavLink 
                        activeStyle={{color:'#00880f'}}
                        onClick={() => paginate(number)} 
                        to={name === undefined ? '/products' : `/product/${name}/`}
                        className={style.pageLink}>
                    {number}
                    </NavLink>
                </div>
                ))}
            </div>
        </div>
    );
};

export default Pagination;
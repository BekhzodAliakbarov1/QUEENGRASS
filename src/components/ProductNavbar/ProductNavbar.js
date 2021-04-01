import React, {Fragment, useState} from 'react'
import style from './ProductNavbar.module.css'
import {ProductList as productList} from '../../API/ProducName'
import { ServiceList as serviceList} from '../../API/ServiceList'
import { NavLink } from 'react-router-dom'

function ProductNavbar() {
    const [products, setProducts] = useState(false)
    const [services, setServices] = useState(false)

    return (
        <div className={style.main}>
            <div className={style.buttons}>
                <div className={style.product} onClick={() => {
                    setProducts(!products)
                    setServices(false)
                }}>
                    <h1>Products</h1>
                </div>
                <div className={style.service} onClick={() => {
                    setProducts(false)
                    setServices(!services)
                }}>
                    <h1>Service</h1>
                </div>
            </div>
            <div className={style.container}>
                <div className = {products ? `${style.productOpen} ${style.productList}` : `${style.productClose} ${style.productList}`}>
                {
                    products && 
                        <Fragment>
                            {
                                productList.map((product,index) => (
                                    <NavLink onClick={() => setProducts(false)}  key={index} activeStyle={{color:'#00880f', borderTop: '1px solid #00880f',borderBottom: '1px solid #00880f'}} to={`/product/${product.url}`}>
                                        {product.visibleName}
                                    </NavLink>
                                ))
                            }
                        </Fragment>
                    }
                </div>
                <div className = {services ? `${style.serviceOpen} ${style.serviceList}` : `${style.serviceClose} ${style.serviceList}`}>
                {
                    services && 
                        <Fragment>
                            {
                                serviceList.map((service,index) => (
                                    <NavLink onClick={() => setServices(false)}  key={index} activeStyle={{color:'#00880f', borderTop: '1px solid #00880f',borderBottom: '1px solid #00880f'}} to={`/services/${service.url}`}>
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

export default ProductNavbar

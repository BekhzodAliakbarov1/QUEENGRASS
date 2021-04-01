import React, { Fragment } from 'react';
import {connect} from 'react-redux'
import { Link } from 'react-router-dom';
import ProductRender from '../Product/ProductGrass';
import style from './SelectedInfo.module.css'

function SelectedInfo(props) {

    const product = {
        name: props.product.typeOfProduct,
        url: props.product?.typeOfProduct?.split(' ')[0]
    }
    return (
        <Fragment>
            <div className={style.main}>
                <div className={style.container}>
                    <h1>Name of Product: <span>{props.product.nameOfProduct}</span></h1>
                    <h2>Type of Product: <span>{props.product.typeOfProduct}</span></h2>
                    <div className={style.img} style={{backgroundImage: `url(http://bekoome.pythonanywhere.com${props.product.image})`}}></div>
                    <h3>{props.product.titleFirst}</h3>
                    {
                        props.product?.paragraphFirst?.split('. ').map((item,index) => (

                            <p className={style.para} key={index}>-{item}</p>
                        ))
                    }
                    {
                        props.product.titleSecond === "" ? null : <h3>{props.product.titleSecond}</h3>
                    }
                    {
                        props.product.paragraphSecond === "" ? null 
                        : (
                            props.product?.paragraphSecond?.split('. ').map((item,index) => (
    
                                <p className={style.para} key={index}>-{item}</p>
                            ))
                        )
                    }
                </div>
                <div className={style.bottomcontent}>
                    <div className={style.href}><a href={`url(https://polar-shelf-89571.herokuapp.com${props.product.image})`} download>Скачать файл</a></div>
                    <div className={style.button}>
                        <div></div>
                        <Link to={`/products/`}>Назад</Link>
                    </div>
                </div>
            
            </div>
            <h2 className={style.likeProducts}>ПОХОЖАЯ ПРОДУКЦИЯ:</h2>
            <hr/>
            <ProductRender product={product}/>
        </Fragment>
    )
}
const mapStateToProps = state => {
    return{
        product: state.selectedItem
    }
}

export default connect(mapStateToProps, null)(SelectedInfo)
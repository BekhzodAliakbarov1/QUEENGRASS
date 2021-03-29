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
    console.log(product);
    return (
        <Fragment>
            <div className={style.main}>
                <div className={style.container}>
                    <h1>Name of Product: <span>{props.product.nameOfProduct}</span></h1>
                    <h2>Type of Product: <span>{props.product.typeOfProduct}</span></h2>
                    <div className={style.img} style={{backgroundImage: `url(http://localhost:8000${props.product.image})`}}></div>
                    <h3>{props.product.titleFirst}</h3>
                    <p>{props.product.paragraphFirst}</p>
                    {
                        props.product.titleSecond === "It is not compulsory" ? null : <h3>{props.product.titleSecond}</h3>
                    }
                    {
                        props.product.paragraphSecond === "It is not compulsory" ? null : <p>{props.product.paragraphSecond}</p>
                    }
                </div>
                <div className={style.button}>
                    <div></div>
                    <Link to={`/products/`}>Подробнее</Link>
                </div>
            
            </div>
            <hr/>
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
import React, { Fragment } from 'react';
import {connect} from 'react-redux'
import style from './SelectedInfo.module.css'

function SelectedInfo(props) {

    console.log(props.product);
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
            </div>
        </Fragment>
    )
}
const mapStateToProps = state => {
    return{
        product: state.selectedItem
    }
}

export default connect(mapStateToProps, null)(SelectedInfo)
import React, { Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import {fetchSelectedCard} from '../../../actions'
import {connect} from 'react-redux'
import style from './Posts.module.css'




const Products = (props) => {
  if (props.loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <Fragment>
      {props.products.map(product => (
        <div className={style.main} key={product.id}>
          <div className={style.img} style={{backgroundImage:`url(https://polar-shelf-89571.herokuapp.com${product.image})`}} ></div>
          <h2>
              {product?.nameOfProduct}
          </h2>
          <p>
              {String(product.paragraphFirst).length > 30 && `${product.paragraphFirst.slice(0,30)}...`}
          </p>
          <div className={style.button}>
                    <div>
                    </div>
                    <NavLink onClick={() => props.fetchSelectedCard(product)} to={`/information/${product.typeOfProduct}`}>Подробнее...</NavLink>
                </div>
      </div>
      ))}
    </Fragment>
  );
};

export default connect(null, {fetchSelectedCard})(Products);
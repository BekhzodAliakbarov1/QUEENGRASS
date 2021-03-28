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
          <div className={style.img} style={{backgroundImage:`url(http://localhost:8000${product.image})`}} ></div>
          <h2>
              ПРОФЕССИОНАЛЬНЫЕ ГАЗОНОКОСИЛКИ
          </h2>
          <p>
              Газонокосилки для футбольных полей, полей для гольфа и регби
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
import React, { Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import style from './Posts.module.css'
const Products = ({ products, loading }) => {
  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <Fragment>
      {products.map(product => (
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
                    <NavLink to={`/information/${product.typeOfProduct}`}>Подробнее...</NavLink>
                </div>
      </div>
      ))}
    </Fragment>
  );
};

export default Products;
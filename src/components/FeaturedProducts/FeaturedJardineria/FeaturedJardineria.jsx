import React from 'react';
import style from "./FeaturedJardineria.module.css";
import { useSelector } from 'react-redux';

const FeaturedJardineria = () => {
  const products = useSelector(state => state.products)
  return (
    <div className={style.jardineria}>
      <div className={style.producto1}>{products[0].name}</div>
      <div className={style.producto}>{products[1].name}</div>
      <div className={style.producto}>{products[2].name}</div>
      <div className={style.producto}>{products[3].name}</div>
      <div className={style.producto}>{products[4].name}</div>
      <div className={style.producto6}>{products[5].name}</div>
    </div>    
  )
}

export default FeaturedJardineria;
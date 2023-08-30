import React from 'react';
import style from "./FeaturedJardineria.module.css";
import { useSelector } from 'react-redux';

const FeaturedJardineria = () => {
  const products = useSelector(state => state.products)
  console.log(products);
  return (
    <div className={style.jardineria}>
      <div className={style.producto1}> Producto 1 </div>
      <div className={style.producto}> Producto 2 </div>
      <div className={style.producto}> Producto 3 </div>
      <div className={style.producto}> Producto 4 </div>
      <div className={style.producto}> Producto 5 </div>
      <div className={style.producto6}> Producto 6 </div>
    </div>    
  )
}

export default FeaturedJardineria;